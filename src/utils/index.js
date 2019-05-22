export { checkNetworkConnection, isConnected } from './network/NetworkUtil';
export { isNull, isEmpty } from './text/TextUtils';
export { validate, validatePassword } from './validate/ValidateUtils';
export { showMessage } from './message/MessageUtils';
export { getRegionForCoordinates } from './map/MapUtils';

export const fahrenheit2Celsius = (fahrenheit) => {
  if (typeof fahrenheit !== 'number') {
    throw new TypeError('Expected a number');
  }

  return (fahrenheit - 32) / 1.8;
};
