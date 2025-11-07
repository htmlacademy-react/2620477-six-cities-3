import { Link } from 'react-router-dom';
import { Offers } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type FavoritesListProps = {
    offers: Offers;
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const groupByCountry = (offersToGroup: Offers): Record<string, Offers> =>
    offersToGroup.reduce((acc, offer) => {
      const country = offer.country;
      if (!acc[country]) {
        acc[country] = [];
      }
      acc[country].push(offer);
      return acc;
    }, {} as Record<string, Offers>);

  return (
    <ul className="favorites__list">
      {Object.entries(groupByCountry(offers)).map(([country, offersGrouppedByCountry]) => (
        <li className="favorites__locations-items" key={country}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{country}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {offersGrouppedByCountry.map((offer) => <PlaceCard offer={offer} variant="vertical" key={offer.id} />)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
