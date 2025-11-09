import { City } from '../../types/city';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/app-process/app-process';
import { getCityName } from '../../store/app-process/selectors';
import { memo } from 'react';

type CitiesListProps = {
  cities: City[];
};

function CitiesList({ cities }: CitiesListProps): JSX.Element {
  const currentCityName = useAppSelector(getCityName);
  const dispatch = useAppDispatch();

  const handleCityClick = (cityName: string) => (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        const isActive = city.name === currentCityName;
        return (
          <li className="locations__item" key={city.name}>
            <a
              className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`}
              href="#"
              onClick={handleCityClick(city.name)}
            >
              <span>{city.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const MemoizedCitiesList = memo(CitiesList);

export default MemoizedCitiesList;
