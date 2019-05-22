import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { appReducer } from '../modules';
import { APP } from '../modules/actions/Types';


const whitelist = ['authReducer'];

const persistConfig = {
  key: 'root',
  whitelist,
  storage: AsyncStorage,
  debug: __DEV__
};

function newAppReducer(state = undefined, action) {
  switch (action.type) {
    case APP.RESET:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
}

const persistedReducer = persistReducer(persistConfig, newAppReducer);

export { persistedReducer };
