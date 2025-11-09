import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchCommentsAction,
  changeFavoriteOfferStatusAction
} from '../../store/api-actions';
import { getOfferPageData } from '../../store/offers-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import { convertToPoints } from '../../utils/convertToPoints';
import { getRatingStarsWidth } from '../../utils/getRatingStarsWidth';
import type { Comment } from '../../types/comment';

function Offer(): JSX.Element | null {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { offerDetailed, isOfferNotFound, offersNearby, comments } = useAppSelector(getOfferPageData);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const nearbyWithCurrent = useMemo(
    () => offerDetailed ? [offerDetailed, ...offersNearby.slice(0, 3)] : [],
    [offerDetailed, offersNearby]
  );

  const points = useMemo(() => convertToPoints(nearbyWithCurrent), [nearbyWithCurrent]);

  const sortedComments = useMemo<Comment[]>(
    () => [...comments]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10),
    [comments]
  );

  const handleFavoriteClick = useCallback(() => {
    if (!offerDetailed) {
      return;
    }
    if (isAuth) {
      dispatch(changeFavoriteOfferStatusAction({
        offerId: offerDetailed.id,
        isFavorite: offerDetailed.isFavorite ? 0 : 1
      }));
    } else {
      navigate(AppRoute.Login);
    }
  }, [isAuth, offerDetailed, dispatch, navigate]);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchOffersNearbyAction(id));
      dispatch(fetchCommentsAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (isOfferNotFound) {
      navigate(AppRoute.NotFound);
    }
  }, [isOfferNotFound, navigate]);

  if (!id || !offerDetailed) {
    return <LoadingScreen />;
  }

  const {
    title,
    description,
    type,
    price,
    rating,
    bedrooms,
    maxAdults,
    goods,
    host,
    images,
    isPremium,
    isFavorite,
    city
  } = offerDetailed;

  const galleryImages = images.slice(0, 6);
  const bedroomText = `${bedrooms} Bedroom${bedrooms > 1 ? 's' : ''}`;
  const adultText = `Max ${maxAdults} adult${maxAdults > 1 ? 's' : ''}`;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {galleryImages.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt="Photo" />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  className={`offer__bookmark-button button${isFavorite ? ' offer__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={handleFavoriteClick}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingStarsWidth(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">{bedroomText}</li>
                <li className="offer__feature offer__feature--adults">{adultText}</li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (
                    <li className="offer__inside-item" key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper user__avatar-wrapper${host.isPro ? ' offer__avatar-wrapper--pro' : ''}`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  {description.split('\n').map((p, i) => (
                    <p className="offer__text" key={p || i}>{p}</p>
                  ))}
                </div>
              </div>

              <section className="offer__reviews reviews">
                {sortedComments.length > 0 && (
                  <>
                    <h2 className="reviews__title">
                      Reviews · <span className="reviews__amount">{sortedComments.length}</span>
                    </h2>
                    <ReviewsList comments={sortedComments} />
                  </>
                )}
                {isAuth && <ReviewForm offerId={id} />}
              </section>
            </div>
          </div>

          <div className="offer__map map">
            <Map city={city} points={points} selectedPointId={offerDetailed.id} />
          </div>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={offersNearby.slice(0, 3)} onActiveChange={() => {}} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
