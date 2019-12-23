import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import getWeatherIcon from "../../../services/getWeatherIcon";

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className='weatherTemperatureCont'>
    <div className='icon-col'>
      {
        getWeatherIcon({name: weatherState, size: 64, color: '#000000'})
      }
    </div>
    <div className='temp-col'>
      <span className='temperature'>{temperature}</span>
      <span className='temperature-type'>°C</span>
    </div>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;