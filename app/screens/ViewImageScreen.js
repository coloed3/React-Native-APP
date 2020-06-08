import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import colors from '../config/Color';
const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position: 'absolute',
    top: 50,
    left: 50,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 45,
    width: 50,
    position: 'absolute',
    top: 40,
    right: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
