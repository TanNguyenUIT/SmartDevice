import { middleware as apiMiddleware } from 'redux-api-call';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epics = combineEpics(rootEpic);

const epicMiddleware = createEpicMiddleware(epics);

const arrayMiddleware = ({ dispatch, getState }) => next => action => {
  const serializeAction = action => {
    if (typeof action === 'function') {
      return action(getState());
    }
    return action;
  };

  if (Array.isArray(action)) {
    action.forEach(a => {
      dispatch(serializeAction(a));
    });
    return;
  }
  next(action);
};

const promiseMiddleware = ({ dispatch }) => next => action => {
  if (!action) return;
  if (typeof action.then === 'function') {
    action.then(a => {
      dispatch(a);
    });
    return;
  }

  next(action);
};

export default function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(
      promiseMiddleware,
      arrayMiddleware,
      epicMiddleware,
      apiMiddleware()
    )
  ];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers, autoRehydrate())
  );
  // const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));
  persistStore(store, { storage: AsyncStorage, blacklist: [] });
  return store;
}

export const store = configureStore();
