import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { getCurrencySymbol } from '../../utils/getCurrencySymbol';
import { getRatingStarsWidth } from '../../utils/getRatingStarsWidth';

type PlaceCardVariant = 'main' | 'favorite';

type PlaceCardProps = {
    offer: Offer;
    variant?: PlaceCardVariant;
    onSetActive?: (activeOfferId: number) => void;
    onResetActive?: () => void;
}

function PlaceCard({offer, variant = 'main', onSetActive, onResetActive}: PlaceCardProps): JSX.Element {
  const isMain = variant === 'main';
  const isFavorite = variant === 'favorite';

  const imageWidth = isMain ? 260 : 150;
  const imageHeight = isMain ? 200 : 110;

  const imageWrapperClass = isMain
    ? 'cities__image-wrapper place-card__image-wrapper'
    : 'favorites__image-wrapper place-card__image-wrapper';

  const infoClass = isMain
    ? 'place-card__info'
    : 'favorites__card-info place-card__info';

  const bookmarkClass = `place-card__bookmark-button button${
    offer.isBookmarked ? ' place-card__bookmark-button--active' : ''
  }`;

  return (
    <article
      className={isMain ? 'cities__card place-card' : 'favorites__card place-card'}
      onMouseEnter={() => onSetActive?.(offer.id)}
      onMouseLeave={() => onResetActive?.()}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={imageWrapperClass}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.mainImageSource}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </Link>
      </div>

      <div className={infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              {getCurrencySymbol(offer.currencyCode)}{offer.price}
            </b>
            <span className="place-card__price-text">
              &#47;&nbsp;{offer.timeBasedPricingMode}
            </span>
          </div>
          <button className={bookmarkClass} type="button" disabled={isFavorite}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingStarsWidth(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
