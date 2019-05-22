import { compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './configurePersist';
import { middleware } from './configureMiddleware';


export default (initialState, callback) => {
  const store = createStore(persistedReducer, initialState, compose(middleware));
  const persist = persistStore(store, null, callback);
  return { store, persist };
};
