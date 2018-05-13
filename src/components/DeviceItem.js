import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from '../util/responsive';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
  icon: {
    alignSelf: 'center',
    color: '#9E9E9E',
    fontSize: responsiveFontSize(24),
    marginLeft: responsiveWidth(5),
  },
  name: {
    alignSelf: 'center',
    color: '#9E9E9E',
    fontSize: responsiveFontSize(16),
    fontWeight: 'bold',
    marginLeft: responsiveWidth(5),
  },
});

const DeviceItem = ({ deviceItem, onPressControlDevice }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPressControlDevice} style={styles.main}>
    <Icon name="microchip" style={styles.icon} />
    <Text numberOfLines={1} style={styles.name}>
      {deviceItem.name}
    </Text>
  </TouchableOpacity>
);

export default DeviceItem;
