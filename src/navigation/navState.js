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

// const navReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case CHANGE_ROOT:
//       return state.merge({
//         root: action.payload,
//       });

//     default:
//       return state;
//   }
// };

export default navReducer;
