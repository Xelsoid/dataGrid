import { createStore } from 'redux';
import allReducers from './reducers';

/* eslint-disable no-underscore-dangle */
export default createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
