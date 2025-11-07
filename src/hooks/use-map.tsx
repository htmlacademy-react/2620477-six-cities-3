import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { City } from '../types/city';
import { Map, TileLayer } from 'leaflet';
import { zoom } from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);
      setMap(instance);
      mapInstanceRef.current = instance;
      isRenderedRef.current = true;
    } else if (mapInstanceRef.current !== null) {
      mapInstanceRef.current.setView([city.lat, city.lng], zoom);
    }
  }, [mapRef, city]);

  useEffect(() => {
    mapInstanceRef.current = map;
  }, [map]);

  return map;
}

export default useMap;
