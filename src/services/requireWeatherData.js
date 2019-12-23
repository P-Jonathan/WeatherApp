import {getURLWeatherByCity} from './getOpenWeatherURLByCity';

const requireWeatherData = async city => {
  const response = await fetch(getURLWeatherByCity(city));
  return await response.json();
};

export default requireWeatherData;