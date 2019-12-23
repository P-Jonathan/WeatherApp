import {SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY} from "../actions";
import {createSelector} from "reselect";
import _ from "lodash";

/**************************************************************/

const objectCitiesToArray = cities => (
  _.toPairs(cities)
    .map(
      ([key, value]) => ({
        key,
        name: key,
        data: value.weather
      })
    )
);

/**************************************************************/

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA: {
      const {city, forecastData} = action.payload;
      const data = state[city];
      return {...state, [city]: {...data, forecastData}};
    }
    case GET_WEATHER_CITY: {
      const city = action.payload;
      const data = state[city];
      return {...state, [city]: {...data, weather: null}};
    }
    case SET_WEATHER_CITY: {
      const {city, weather} = action.payload;
      const data = state[city];
      return {...state, [city]: {...data, weather}};
    }
    default:
      return state;
  }
};

export const getForecastDataFromCities = createSelector(
  (state, city) => state[city] && state[city].forecastData,
  forecastData => forecastData
);

export const getWeatherCities = createSelector(
  state => objectCitiesToArray(state), cities => cities
);