import { Link } from 'react-router-dom';
import { Offers } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type FavoritesListProps = {
    offers: Offers;
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const groupedOffers = offers.reduce((acc, offer) => {
    const country = offer.city.name;
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(offer);
    return acc;
  }, {} as Record<string, Offers>);

  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffers).map(([city, cityOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {cityOffers.map((offer) => (
              <PlaceCard offer={offer} variant="vertical" key={offer.id} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
