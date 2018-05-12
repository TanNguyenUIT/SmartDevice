import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

import { CHANGE_ROOT } from './navTypes';

const initialState = Immutable({
  root: undefined,
});

const navReducer = handleActions(
  {
    [CHANGE_ROOT]: (state, { payload }) =>
      state.merge({
        root: payload,
      }),
  },
  initialState,
);

export default navReducer;
