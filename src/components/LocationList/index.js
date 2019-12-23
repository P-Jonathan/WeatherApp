import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../WeatherLocation';

const LocationList = ({cities, onSelectedLocation}) => {

  const getWeatherLocations = cities => (
    cities.map(({key, name, data}) =>
      <WeatherLocation
        key={key}
        city={name}
        data={data}
        onWeatherLocationClick={
          () => onSelectedLocation(name)
        }
      />
    )
  );

  return (
    <div className='locationList'>
      {getWeatherLocations(cities)}
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
};

export default LocationList;