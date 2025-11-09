import { Point } from '../types/point';

type WithLocation = {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export const convertToPoints = (items: WithLocation[]): Point[] =>
  items.map((item) => ({
    id: item.id,
    latitude: item.location.latitude,
    longitude: item.location.longitude
  }));
