import { useState, useCallback, useMemo } from 'react';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { Point } from '../../types/point';
import { convertToPoints } from '../../utils/convertToPoints';
import CitiesList from '../../components/cities-list/cities-list';
import { City } from '../../types/city';
import { useAppSelector } from '../../hooks';
import { getOffersByCity } from '../../store/offers-data/selectors';
import { getCityName } from '../../store/app-process/selectors';
import SortOptions from '../../components/sort-options/sort-options';
import { SortType } from '../../const';
import { sortOffers } from '../../utils/sortOffers';
import Header from '../../components/header/header';
import MainEmpty from '../../components/main-empty/main-empty';

type MainProps = {
  cities: City[];
};

function Main({ cities }: MainProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | undefined>(undefined);
  const [sortType, setSortType] = useState<SortType>(SortType.Popular);

  const currentCityName = useAppSelector(getCityName);
  const offers = useAppSelector(getOffersByCity);

  const city = useMemo(
    () => cities.find((c) => c.name === currentCityName) || cities[0],
    [cities, currentCityName]
  );

  const sortedOffers = useMemo(
    () => sortOffers(offers, sortType),
    [offers, sortType]
  );

  const points: Point[] = useMemo(
    () => convertToPoints(sortedOffers),
    [sortedOffers]
  );

  const handleActiveChange = useCallback((offerId: string | undefined) => {
    setActiveOfferId(offerId);
  }, []);

  const handleSortTypeChange = useCallback((newSortType: SortType) => {
    setSortType(newSortType);
  }, []);

  const hasOffers = offers.length > 0;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${!hasOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities} />
          </section>
        </div>

        {hasOffers ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} place{offers.length !== 1 ? 's' : ''} to stay in {city.name}
                </b>
                <SortOptions sortType={sortType} onSortTypeChange={handleSortTypeChange} />
                <OffersList offers={sortedOffers} onActiveChange={handleActiveChange} />
              </section>

              <div className="cities__right-section">
                <Map city={city} points={points} selectedPointId={activeOfferId} />
              </div>
            </div>
          </div>
        ) : (
          <MainEmpty currentCityName={currentCityName} />
        )}
      </main>
    </div>
  );
}

export default Main;
