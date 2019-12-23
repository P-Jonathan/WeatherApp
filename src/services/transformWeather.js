import convert from 'convert-units';
import {CLOUD, DRIZZLE, RAIN, SNOW, SUN, THUNDER} from '../constants/weather';

const transformTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(0));
};

const getWeatherState = weather => {
    const { id } = weather;

    if(id < 300)
        return THUNDER;
    else if(id < 400)
        return DRIZZLE;
    else if(id < 600)
        return RAIN;
    else if (id < 700)
        return SNOW;
    else if(id === 800)
        return SUN;
    else
        return CLOUD;
};

const transformWeather = weatherData => {
    const weatherState = getWeatherState(weatherData.weather[0]);
    const { humidity, temp } = weatherData.main;
    const temperature = transformTemp(temp);
    const { speed } = weatherData.wind;

    return {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    };
};

export default transformWeather;