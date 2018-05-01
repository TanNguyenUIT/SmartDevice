import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import TabStack from './TabStack';

export const AppNavigator = StackNavigator(
  {
    HomePage: {
      screen: TabStack
    }
  },
  {
    headerMode: 'none'
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const HOCAppWithNavigationState = compose(
  connect(state => ({ nav: state.nav }))
)(AppWithNavigationState);

export default HOCAppWithNavigationState;
