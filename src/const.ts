import { City } from './types/city';

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 13
    }
  }
];

export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CITY: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.374,
    longitude: 4.88969,
    zoom: 13
  }
};

export const Settings = {
  placesNumber: 4,
} as const;

export const ReviewLength = {
  MIN: 50,
  MAX: 300
};

export const CURRENCY_SYMBOLS = {
  euro: '€',
} as const;

export enum SortType {
  Popular,
  PriceLowToHigh,
  PriceHighToLow,
  TopRated,
}

export enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout'
}
