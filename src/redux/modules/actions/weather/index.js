import { WEATHER } from '../Types';
import { getCurrentWeather } from '../../../../api/service';
import theme from '../../../../../theme';

function getData() {
  return {
    type: WEATHER.REQUEST,
    message: 'Be Hold, fetching data may take some time :)'
  };
}

function getDataSuccess(data) {
  return {
    type: WEATHER.SUCCESS,
    data,
  };
}

function getDataFailure(message) {
  return {
    type: WEATHER.FAIL,
    message,
  };
}

export function reset() {
  return {
    type: WEATHER.RESET
  };
}

export function getCurrentWeatherRequest(params) {
  return (dispatch) => {
    dispatch(getData());
    getCurrentWeather(params)
      .then(({ data }) => {
        dispatch(getDataSuccess(data));
      }).catch((error) => {
        dispatch(getDataFailure(error.message || theme.string.translate('error_current_weather')));
      });
  };
}
