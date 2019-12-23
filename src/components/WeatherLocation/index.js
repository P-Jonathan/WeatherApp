import './styles.css';
import React from 'react';
import Location from './Location';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';
import CircularProgres from '@material-ui/core/CircularProgress';

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
  <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Location city={city}/>
    {data ? <WeatherData data={data}/> : <CircularProgres size={50}/>}
  </div>
);

WeatherLocation.propTyper = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
};

export default WeatherLocation;