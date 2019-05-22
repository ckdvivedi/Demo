import { checkNetworkConnection } from '../../utils';


async function apiNetworkRequest(config) {
  const networkCnn = await checkNetworkConnection();
  if (networkCnn.type === 'none') {
    return requestNetworkError('No Internet Connection.');
  }
  console.log('apiNetworkRequest', config);
  return config;
}

function requestNetworkError(error) {
  console.log('requestNetworkError', error);
  return Promise.reject(typeof error === 'string' ? error : 'Something went wrong.');
}

function apiNetworkResponse(response) {
  try {
    console.log('apiResponse', JSON.stringify(response));

    return response;
  } catch (error) {
    console.log('apiError', error);
    return responseNetworkError('Something went wrong.');
  }
}

function responseNetworkError(error) {
  console.log('ResponseError', error);
  return Promise.reject(new Error(typeof error === 'string' ? error : 'Something went wrong.'));
}

export {
  apiNetworkRequest, requestNetworkError, apiNetworkResponse, responseNetworkError
};
