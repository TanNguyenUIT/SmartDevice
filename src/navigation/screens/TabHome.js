import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { changeRoot } from '../navActions';
import { definedScreens } from '../navIndex';
import localization from '../../util/localization';

const TabHome = ({ onPressAddDevice, onPressControlDevice }) => (
  <View style={{ flex: 1 }}>
    <Text>Danh sách các thiết bị</Text>

    <TouchableOpacity onPress={onPressAddDevice}>
      <Text>Thêm thiết bị</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPressControlDevice}>
      <Text>Điều khiển thiết bị</Text>
    </TouchableOpacity>
  </View>
);

const HOCTabHome = compose(
  connect(
    state => ({
      nav: state.nav,
    }),
    {
      changeRoot,
    },
  ),
  withHandlers({
    onPressAddDevice: ({ navigator }) => () =>
      navigator.push({
        title: localization.addDevice,
        screen: definedScreens.addDeviceScreen,
      }),
    onPressControlDevice: ({ navigator }) => () =>
      navigator.push({
        title: localization.controlDevice,
        screen: definedScreens.controlDeviceScreen,
      }),
  }),
)(TabHome);

export default HOCTabHome;
