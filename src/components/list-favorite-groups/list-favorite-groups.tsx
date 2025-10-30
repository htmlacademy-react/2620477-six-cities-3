import { TypeOffer } from '../../types/offer';
import FavoriteOffer from '../favorites-offer/favorites-offer';

type ListFavoriteGroupsProps = {
  cityName: string;
  offers: TypeOffer[];
};

function ListFavoriteGroups({
  cityName,
  offers,
}: ListFavoriteGroupsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers?.map((offer) => (
          <FavoriteOffer key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}

export default ListFavoriteGroups;
