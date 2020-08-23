import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';

const initialState = {};
const middleware = [thunk];

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(
  applyMiddleware(...middleware),
  ...enhancerList,
);

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;
