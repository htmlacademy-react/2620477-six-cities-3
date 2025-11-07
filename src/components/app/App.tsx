import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';
import { Offers } from '../../types/offer';
import { City } from '../../types/city';
import { useAppDispatch } from '../../hooks';
import { setOffers } from '../../store/action';

type AppProps = {
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  cities: City[];
}

function App({offers, cities, authorizationStatus}: AppProps): JSX.Element {
  const dispatch = useAppDispatch();

  dispatch(setOffers(offers));

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main cities={cities} authorizationStatus={authorizationStatus} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <Favorites offers={offers.filter((offer) => offer.isBookmarked)} authorizationStatus={authorizationStatus} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer offers={offers} authorizationStatus={authorizationStatus} />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
