import moment from "moment";
import 'moment/locale/es';
import transformWeather from "./transformWeather";

const transformData = data => {
  const {dt} = data;
  return {
    weekDay: moment.unix(dt).format('ddd'),
    hour: moment.unix(dt).hour(),
    data: transformWeather(data)
  };
};

const transformForecast = ({list}) => {
  return list.filter(item => {
    const hour = moment.unix(item.dt).utc().hour();
    return hour === 6 || hour === 12 || hour === 18;
  }).map(data => transformData(data));
};

export default transformForecast;