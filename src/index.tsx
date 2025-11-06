import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { offers } from './mocks/offers';
import { AuthorizationStatus } from './const';
import { cities } from './mocks/cities';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        cities={cities}
        authorizationStatus={AuthorizationStatus.Auth}
      />
    </Provider>
  </React.StrictMode>
);
