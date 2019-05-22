import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';


function getMiddleware() {
  let middleware = [thunk];
  if (__DEV__) {
    middleware = [require('redux-immutable-state-invariant').default(), ...middleware];
  }
  return middleware;
}

const middleware = applyMiddleware(...getMiddleware());

export { middleware };
