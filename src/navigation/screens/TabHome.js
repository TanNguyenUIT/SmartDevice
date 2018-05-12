import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { changeRoot, pushScreen } from '../navActions';

const TabHome = ({ onPressAddDevice, navigator }) => (
  <View style={{ flex: 1 }}>
    <Text>Danh sách các thiết bị</Text>

    <TouchableOpacity
      onPress={() =>
        navigator.push({
          title: 'Add Device',
          screen: 'addDeviceScreen',
        })
      }
    >
      <Text>Thêm thiết bị</Text>
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
      pushScreen,
    },
  ),
  withHandlers({
    onPressAddDevice: ({ changeRoot }) => () => changeRoot('addDevice'),
  }),
)(TabHome);

export default HOCTabHome;
