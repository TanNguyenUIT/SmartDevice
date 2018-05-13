import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
  },
  icon: {
    color: '#9E9E9E',
  },
  name: {
    color: '#9E9E9E',
    fontSize: 16,
    fontWeight: 'bold',
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
