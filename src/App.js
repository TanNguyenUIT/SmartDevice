import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reducers/createStore';
import AppWithNavigationState from './navigation/navigationIndex';

const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
