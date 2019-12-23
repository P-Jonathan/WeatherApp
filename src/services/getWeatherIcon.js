import React from 'react';
import {
  WiSnow,
  WiRain,
  WiCloudy,
  WiDaySunny,
  WiDayShowers,
  WiDaySnowThunderstorm
} from 'weather-icons-react';

import {CLOUD, DRIZZLE, RAIN, SNOW, SUN, THUNDER} from "../constants/weather";

const getWeatherIcon = ({name = SUN, size = 24, color = '#000'}) => {
  const icons = {};

  icons[SUN] = <WiDaySunny size={size} color={color}/>;
  icons[SNOW] = <WiSnow size={size} color={color}/>;
  icons[RAIN] = <WiRain size={size} color={color}/>;
  icons[CLOUD] = <WiCloudy size={size} color={color}/>;
  icons[DRIZZLE] = <WiDayShowers size={size} color={color}/>;
  icons[THUNDER] = <WiDaySnowThunderstorm size={size} color={color}/>;

  return icons[name];
};

export default getWeatherIcon;