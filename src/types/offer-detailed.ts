import { City } from './city';
import { User } from './user';
import { Location } from './location';

export type OfferDetailed = {
  id: string;
  title: string;
  description: string;
  type: 'house' | 'room' | 'hotel' | 'apartment';
  price: number;
  images: string[];
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: User;
};

export type OffersDetailed = OfferDetailed[];
