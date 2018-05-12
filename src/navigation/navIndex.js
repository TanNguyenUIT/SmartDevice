import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { CHANGE_ROOT } from './navTypes';
import Login from './screens/Login';
import TabHome from './screens/TabHome';
import TabAbout from './screens/TabAbout';

export const definedScreens = {
  login: 'nav.login',
  tabHome: 'nav.tabHome',
  tabAbout: 'nav.tabAbout',
};

export const registerScreens = store => {
  Navigation.registerComponent(definedScreens.login, () => Login, store, Provider);
  Navigation.registerComponent(definedScreens.tabHome, () => TabHome, store, Provider);
  Navigation.registerComponent(definedScreens.tabAbout, () => TabAbout, store, Provider);
};

export const navInitial = { type: CHANGE_ROOT, payload: 'main' };

export const startApp = root => {
  switch (root) {
    case 'login':
      Navigation.startSingleScreenApp({
        screen: {
          screen: definedScreens.login,
          title: 'Welcome',
          navigatorStyle: {},
          navigatorButtons: {},
        },
      });
      return;

    case 'main':
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'tabHome',
            screen: definedScreens.tabHome,
            title: 'tabHome',
            backButtonTitle: undefined,
          },
          {
            label: 'tabAbout',
            screen: definedScreens.tabAbout,
            title: 'tabAbout',
            backButtonTitle: undefined,
          },
        ],
      });
      break;

    default:
      break;
  }
};
