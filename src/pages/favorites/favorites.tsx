import FavoritesList from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavorites } from '../../store/offers-data/selectors';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);
  const favoriteCount = favorites.length;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const hasFavorites = favoriteCount > 0;

  return (
    <div className={`page ${hasFavorites ? '' : 'page--favorites-empty'}`}>
      <Header />

      <main className={`page__main page__main--favorites ${hasFavorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {hasFavorites ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList offers={favorites} />
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
