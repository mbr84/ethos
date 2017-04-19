import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

const configureStore = (preloadedState = preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
  );
};

export default configureStore
