import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { CHANGE_ROOT } from './navTypes';
import localization from '../util/localization';
import Login from './screens/Login';
import TabHome from './screens/TabHome';
import TabAbout from './screens/TabAbout';
import AddDevice from './screens/AddDevice';
import ControlDevice from './screens/ControlDevice';

const icon = require('../assets/images/icon1.png');
const selectedIcon = require('../assets/images/icon2.png');

export const definedScreens = {
  loginScreen: 'loginScreen',
  tabHomeScreen: 'tabHomeScreen',
  tabAboutScreen: 'tabAboutScreen',
  addDeviceScreen: 'addDeviceScreen',
  controlDeviceScreen: 'controlDeviceScreen',
};

export const registerScreens = store => {
  Navigation.registerComponent(definedScreens.loginScreen, () => Login, store, Provider);
  Navigation.registerComponent(definedScreens.tabHomeScreen, () => TabHome, store, Provider);
  Navigation.registerComponent(definedScreens.tabAboutScreen, () => TabAbout, store, Provider);
  Navigation.registerComponent(definedScreens.addDeviceScreen, () => AddDevice, store, Provider);
  Navigation.registerComponent(
    definedScreens.controlDeviceScreen,
    () => ControlDevice,
    store,
    Provider,
  );
};

export const navInitial = { type: CHANGE_ROOT, payload: 'main' };

export const startApp = root => {
  switch (root) {
    case 'login':
      Navigation.startSingleScreenApp({
        screen: {
          screen: definedScreens.loginScreen,
          title: 'Welcome',
          navigatorStyle: {},
          navigatorButtons: {},
        },
      });
      break;

    case 'main':
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: localization.tabHome,
            screen: definedScreens.tabHomeScreen,
            title: localization.tabHome,
            backButtonTitle: undefined,
            icon,
            selectedIcon,
          },
          {
            label: localization.tabAbout,
            screen: definedScreens.tabAboutScreen,
            title: localization.tabAbout,
            backButtonTitle: undefined,
            icon,
            selectedIcon,
          },
        ],
        appStyle: {
          hideBackButtonTitle: true,
        },
      });
      break;

    default:
      break;
  }
};
