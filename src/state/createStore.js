import { compose, applyMiddleware, createStore } from 'redux';
import { middleware as apiMiddleware } from 'redux-api-call';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import { registerScreens } from '../navigation/navIndex';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [applyMiddleware(rootEpic, apiMiddleware(), logger)];

const store = createStore(rootReducer, {}, composeEnhancers(...enhancers));

registerScreens(store);

export default store;
