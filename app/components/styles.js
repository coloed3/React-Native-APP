import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
console.log(Platform.OS);
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default styles;
