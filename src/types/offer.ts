import { City } from './city';
import { Location } from './location';

export type Offer = {
  id: string;
  title: string;
  type: 'house' | 'room' | 'hotel' | 'apartment';
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Offers = Offer[];
