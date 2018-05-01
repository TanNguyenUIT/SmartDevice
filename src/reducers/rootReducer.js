import { combineReducers } from 'redux';
import { reducers as apiReducer } from 'redux-api-call';
import { AppNavigator } from '../navigation/NavigationIndex';

const nav = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const rootReducer = combineReducers({
  ...apiReducer,
  nav
});

export default rootReducer;
