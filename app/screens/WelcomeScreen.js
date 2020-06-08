import React, { Component } from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';

class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require('../assets/background.jpg')}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo-red.png')}
            style={styles.logo}
          />
          <Text style={styles.tagline}> Working on mobile Design </Text>
        </View>
        <AppButton title='Login' onPress={() => console.log('login')} />
        <AppButton
          color='secondary'
          title='Register'
          onPress={() => console.log('Registered ')}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  loginButton: { width: '100%', height: 70, backgroundColor: '#fc5c65' },
  registerButton: { width: '100%', height: 70, backgroundColor: '#4ecdc4' },
  tagline: { fontSize: 25, fontWeight: '600', paddingVertical: 20 },
});

export default WelcomeScreen;
