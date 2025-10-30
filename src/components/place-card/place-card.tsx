import { TypeOffer } from '../../types/offer';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  offer: TypeOffer;
  onMouseOver: () => void;
  active: boolean;
};

function PlaceCard({offer, onMouseOver, active }: PlaceCardProps): JSX.Element {
  const activeStyle = active ? '1px solid #ececec' : '';
  return (
    <article className="cities__card place-card" onMouseOver={onMouseOver} style={{ border: activeStyle }}>
      {
        offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ''
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(offer.rating * 100 / 5)} %`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
