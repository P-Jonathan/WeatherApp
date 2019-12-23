import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import {CircularProgress} from "@material-ui/core";

const toForecastItem = ({weekDay, hour, data}) => {
  return <ForecastItem key={`${weekDay}-${hour}`} weekDay={weekDay} hour={hour} data={data}/>;
};

const renderForecastItemDays = forecastData => {
  return forecastData.map(forecast => toForecastItem(forecast));
};

const ForecastExtended = ({city, forecastData}) => (
  <div className={'forecastCont'}>
    <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
    {forecastData ? renderForecastItemDays(forecastData) : <CircularProgress/>}
  </div>
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array
};

export default ForecastExtended;
