import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './Home/HomeIndex';
import InformationScreen from './Information/InformationIndex';

const styles = StyleSheet.create({
  label: {
    width: 30, // FIXME
    fontSize: 10 // FIXME
  },
  tabBar: {
    backgroundColor: '#429299' // FIXME
  }
});

const TabIcon = (iconName, tintColor, size) => {
  return (
    <Icon
      name={iconName}
      size={size}
      style={{ color: tintColor, marginTop: 5 }}
    />
  );
};

const TabStack = TabNavigator(
  {
    tabHome: {
      screen: HomeScreen,
      navigationOptions: () => {
        return {
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ tintColor }) => TabIcon('home', tintColor, 20)
        };
      }
    },
    tabInformation: {
      screen: InformationScreen,
      navigationOptions: () => {
        return {
          tabBarLabel: 'Thông tin',
          tabBarIcon: ({ tintColor }) => TabIcon('home', tintColor, 20)
        };
      }
    }
  },
  {
    initialRouteName: 'tabHome',
    headerMode: 'screen',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'white',
      showLabel: true,
      showIcon: true,
      upperCaseLabel: false,
      pressColor: 'transparent',
      scrollEnabled: false,
      labelStyle: styles.label,
      style: styles.tabBar
    }
  }
);

export default TabStack;
