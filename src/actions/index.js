import requireForecastData from "../services/requireForecastData";
import transformForecast from "../services/transformForecast";
import requireWeatherData from "../services/requireWeatherData";
import transformWeather from "../services/transformWeather";
import {getForecastDataDateFromCities} from "../reducers";

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER = 'SET_WEATHER';
export const SET_CITY = 'SET_CITY';

export const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});
export const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
export const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});
export const setCity = payload => ({type: SET_CITY, payload});

export const setSelectedCity = payload => {
  return (dispatch, getState) => {
    dispatch(setCity(payload));

    const state = getState();
    const date = getForecastDataDateFromCities(state);
    const nowDate = new Date();

    if (date && (nowDate - date) < 60 * 1000)
      return;

    return requireForecastData(payload)
      .then(data => {
        const forecastData = transformForecast(data);
        dispatch(setForecastData({city: payload, forecastData}));
      })
      .catch(console.error);
  }
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
        dispatch(getWeatherCity(city));
        requireWeatherData(city)
          .then(weatherData => {
            const weather = transformWeather(weatherData);
            dispatch(setWeatherCity({city, weather}));
          });
      }
    );
  };
};