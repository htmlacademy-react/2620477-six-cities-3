import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../mocks/mocks';

import PageMain from '../../pages/page-main/page-main';
import PageFavorites from '../../pages/page-favorites/page-favorites';
import PageLogin from '../../pages/page-login/page-login';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PageOffer from '../../pages/page-offer/page-offer';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placesNumber: number;
  authStatus: AuthorizationStatus;
}

function App({placesNumber, authStatus}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<PageMain placesNumber={placesNumber} authStatus={authStatus} />} />
        <Route path={AppRoute.Login} element={<PageLogin />} />
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={authStatus}>
              <PageFavorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<PageOffer authStatus={authStatus} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
