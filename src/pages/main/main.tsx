import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { Point } from '../../types/point';
import { useState } from 'react';
import { AuthorizationStatus } from '../../const';
import Header from '../../components/header/header';
import { convertToPoints } from '../../utils/convertToPoints';
import CitiesList from '../../components/cities-list/cities-list';
import { City } from '../../types/city';
import { useAppSelector } from '../../hooks';

type MainProps = {
    cities: City[];
    authorizationStatus: AuthorizationStatus;
}

function Main({cities, authorizationStatus}: MainProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<number | undefined>(undefined);
  const onActiveChange = (offerId: number | undefined) => {
    setActiveOfferId(offerId);
  };
  const allOffers = useAppSelector((state) => state.offers);
  const currentCityId = useAppSelector((state) => state.cityId);
  const city = cities.filter((c) => c.id === currentCityId)[0];
  const offers = allOffers.filter((offer) => offer.cityId === currentCityId);
  const points: Point[] = convertToPoints(offers);

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList offers={offers} onActiveChange={onActiveChange}/>
            </section>
            <div className="cities__right-section">
              <Map city={city} points={points} selectedPointId={activeOfferId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
