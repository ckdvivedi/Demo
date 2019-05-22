import { restApiGet } from './ApiMethod';

const GET_CURRENT_WEATHER = 'data/2.5/weather';
const GET_FORECAST_WEATHER = 'data/2.5/forecast';

function getCurrentWeather(data) {
  return restApiGet(GET_CURRENT_WEATHER, data);
}

function getForecastWeather(data) {
  return restApiGet(GET_FORECAST_WEATHER, data);
}

export {
  getCurrentWeather,
  getForecastWeather
};
