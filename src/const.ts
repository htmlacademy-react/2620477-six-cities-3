import { City } from './types/city';

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
