import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { changeRoot } from '../navActions';
import { definedScreens } from '../navIndex';
import { responsiveHeight, responsiveFontSize } from '../../util/responsive';
import localization from '../../util/localization';
import fakeDeviceList from '../../util/fakeDeviceList';
import DeviceItem from '../../components/DeviceItem';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(18),
    color: '#2196F3',
    fontWeight: '600',
    marginTop: responsiveHeight(2),
  },
  deviceList: {
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(8),
  },
  icon: {
    alignSelf: 'flex-end',
    color: '#9E9E9E',
    fontSize: responsiveFontSize(40),
    marginRight: 16,
    marginBottom: 10,
  },
});

const TabHome = ({ onPressAddDevice, onPressControlDevice }) => (
  <View style={styles.main}>
    <Text style={styles.title}>Danh sách các thiết bị</Text>
    <FlatList
      data={fakeDeviceList}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <DeviceItem deviceItem={item} onPressControlDevice={onPressControlDevice} />
      )}
      style={styles.deviceList}
    />

    <TouchableOpacity onPress={onPressAddDevice}>
      <Icon name="ios-add-circle-outline" style={styles.icon} />
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
