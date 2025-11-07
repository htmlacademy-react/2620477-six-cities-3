import { City } from './types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITY: City = {
  id: 4,
  name: 'Amsterdam',
  lat: 52.374,
  lng: 4.88969,
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

export const zoom = 12;

export enum SortType {
  Popular,
  PriceLowToHigh,
  PriceHighToLow,
  TopRated,
}
