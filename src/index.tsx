import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { AuthorizationStatus, Settings } from './mocks/mocks';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesNumber={Settings.placesNumber}
      authStatus={AuthorizationStatus.Auth}
      offers = {offers}
    />
  </React.StrictMode>
);
