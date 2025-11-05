import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { offers } from './mocks/offers';
import { AuthorizationStatus, Settings } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
      placesNumber={Settings.placesNumber}
      authorizationStatus={AuthorizationStatus.Auth}
    />
  </React.StrictMode>
);
