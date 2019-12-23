import {combineReducers} from "redux";
import {createSelector} from 'reselect';
import {cities} from "./cities";
import {city} from "./city";

import {
  getForecastDataFromCities as _getForecastDataFromCities,
  getWeatherCities as _getWeatherCities
} from "./cities";

export default combineReducers({
  cities,
  city
})

export const getCity = createSelector(state => state.city, city => city);

export const getCities = createSelector(state => state.cities, cities => cities);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);

export const getForecastDataFromCities = createSelector(getCities, getCity, _getForecastDataFromCities);
