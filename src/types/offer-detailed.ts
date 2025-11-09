import { City } from './city';
import { Host } from './host';
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
  host: Host;
};

export type OffersDetailed = OfferDetailed[];
