import api from './ApiService';
import theme from '../../../theme';

const { WEATHER_API_KEY } = theme.config;

function restApiPost(url, data) {
  return api.post({
    url,
    data
  });
}

function restApiGet(url, params) {
  return api.get({
    url,
    params: {
      appid: `${WEATHER_API_KEY}`,
      ...params
    }
  });
}


export { restApiPost, restApiGet };
