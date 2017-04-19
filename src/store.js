import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer.js';

export default configureStore = (preloadedState = preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
  );
  return store;
};
