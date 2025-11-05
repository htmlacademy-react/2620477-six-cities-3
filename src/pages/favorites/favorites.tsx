import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types/offer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AuthorizationStatus } from '../../const';

type FavoritesProps = {
    offers: Offers;
    authorizationStatus: AuthorizationStatus;
}

function Favorites({offers, authorizationStatus}: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
