import { Link, useNavigate } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { getRatingStarsWidth } from '../../utils/getRatingStarsWidth';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteOfferStatusAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus, AppRoute } from '../../const';
import { memo } from 'react';

type PlaceCardVariant = 'horizontal' | 'vertical';

type PlaceCardProps = {
  offer: Offer;
  variant?: PlaceCardVariant;
  onSetActive?: (activeOfferId: string) => void;
  onResetActive?: () => void;
};

const CARD_SETTINGS = {
  horizontal: {
    imageWidth: 260,
    imageHeight: 200,
    containerClass: 'cities__card place-card',
    imageWrapperClass: 'cities__image-wrapper place-card__image-wrapper',
    infoClass: 'place-card__info',
    bookmarkInteractive: true,
  },
  vertical: {
    imageWidth: 150,
    imageHeight: 110,
    containerClass: 'favorites__card place-card',
    imageWrapperClass: 'favorites__image-wrapper place-card__image-wrapper',
    infoClass: 'favorites__card-info place-card__info',
    bookmarkInteractive: true,
  },
} as const;

function PlaceCard({
  offer,
  variant = 'horizontal',
  onSetActive,
  onResetActive,
}: PlaceCardProps): JSX.Element {
  const settings = CARD_SETTINGS[variant];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const bookmarkClass = `place-card__bookmark-button button${
    offer.isFavorite ? ' place-card__bookmark-button--active' : ''
  }`;

  const handleFavoriteClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (isAuth) {
      dispatch(
        changeFavoriteOfferStatusAction({
          offerId: offer.id,
          isFavorite: offer.isFavorite ? 0 : 1,
        })
      );
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <article
      className={settings.containerClass}
      onMouseEnter={() => onSetActive?.(offer.id)}
      onMouseLeave={() => onResetActive?.()}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={settings.imageWrapperClass}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={settings.imageWidth}
            height={settings.imageHeight}
            alt="Place image"
          />
        </Link>
      </div>

      <div className={settings.infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className={bookmarkClass}
            type="button"
            onClick={handleFavoriteClick}
            disabled={!settings.bookmarkInteractive}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
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
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

const MemoizedPlaceCard = memo(PlaceCard);
export default MemoizedPlaceCard;
