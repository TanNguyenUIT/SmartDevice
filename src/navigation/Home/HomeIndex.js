import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  addButton: {
    flexDirection: 'row'
  }
});

const Home = () => (
  <View style={styles.main}>
    <Text>This is homepage</Text>

    <TouchableOpacity style={styles.addButton}>
      <Icon name="ios-camera" color="orange" size={20} />
      <Text>Thêm thiết bị</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
