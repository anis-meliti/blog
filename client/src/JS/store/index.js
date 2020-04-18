import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const middleWare = [thunk];

const initialState = {};

const Store = createStore(
  combineReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);
export default Store;
