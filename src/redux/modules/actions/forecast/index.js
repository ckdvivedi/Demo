import { FORECAST } from '../Types';
import { getForecastWeather } from '../../../../api/service';
import theme from '../../../../../theme';

function getData() {
  return {
    type: FORECAST.REQUEST,
    message: 'Be Hold, fetching data may take some time :'
  };
}

function getDataSuccess(data) {
  return {
    type: FORECAST.SUCCESS,
    data,
  };
}

function getDataFailure(message) {
  return {
    type: FORECAST.FAIL,
    message,
  };
}

export function reset() {
  return {
    type: FORECAST.RESET
  };
}

export function getForecastWeatherRequest(params) {
  return (dispatch) => {
    dispatch(getData());
    getForecastWeather(params)
      .then(({ data }) => {
        dispatch(getDataSuccess(data));
      }).catch((error) => {
        dispatch(getDataFailure(error.message || theme.string.translate('error_forecast_weather')));
      });
  };
}
