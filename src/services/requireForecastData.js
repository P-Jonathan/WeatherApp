import {getURLForecastbyCity} from './getOpenWeatherURLByCity';

const requireForecastData = async city => {
  const response = await fetch(getURLForecastbyCity(city));
  return await response.json();
};

export default requireForecastData;