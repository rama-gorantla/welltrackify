import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainScreen from './mainScreen';

export default function HomeScreen() {
  return (
    <MainScreen></MainScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
