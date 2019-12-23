import {
    api_key,
    url_base_weather,
    action_default,
    action_forecast
} from './../constants/api_url';

export const getURLWeatherByCity = city => {
    return `${url_base_weather}${action_default}?q=${city}&appid=${api_key}`;
};

export const getURLForecastbyCity = city => {
    return `${url_base_weather}${action_forecast}?q=${city}&appid=${api_key}`;
};