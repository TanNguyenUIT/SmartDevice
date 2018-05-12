import { combineReducers } from 'redux';
import { reducers as api } from 'redux-api-call';

import nav from '../navigation/navState';

const rootReducer = combineReducers({
  ...api,
  nav,
});

export default rootReducer;
