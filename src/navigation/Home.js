import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
});

const Home = () => (
  <View style={styles.main}>
    <Text>This is homepage</Text>
  </View>
);

export default Home;
