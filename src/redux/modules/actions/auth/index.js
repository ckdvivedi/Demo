import firebase from 'react-native-firebase';
import { AUTH } from '../Types';
import theme from '../../../../../theme';

function getData() {
  return { type: AUTH.REQUEST };
}

function getDataSuccess(data) {
  return {
    type: AUTH.SUCCESS,
    data,
  };
}

function getDataFailure(message) {
  return {
    type: AUTH.FAIL,
    message,
  };
}

export function reset() {
  return {
    type: AUTH.RESET
  };
}

export function doSignUpRequest({ email, password }) {
  return (dispatch) => {
    dispatch(getData());
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log('SignUp', data);
        dispatch(getDataSuccess(data));
      }).catch((error) => {
        console.log('SignUp', error);
        dispatch(getDataFailure(error.message || theme.string.translate('error_sign_up')));
      });
  };
}

export function doLoginRequest({ email, password }) {
  return (dispatch) => {
    dispatch(getData());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log('SignUp', data);
        dispatch(getDataSuccess(data));
      }).catch((error) => {
        console.log('SignUp', error);
        dispatch(getDataFailure(error.message || theme.string.translate('error_sign_in')));
      });
  };
}
