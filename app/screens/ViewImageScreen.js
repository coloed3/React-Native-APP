import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import colors from '../config/Color';
import styled from 'styled-components';

import { MaterialCommunityIcons } from '@expo/vector-icons';
const ViewImageScreen = () => {
  return (
    <Container>
      <Iconmaincontainer>
        <Iconcontainer>
          <MaterialCommunityIcons
            name='trash-can-outline'
            size={35}
            color='white'
          />
        </Iconcontainer>
        <IconcontainerClose>
          <MaterialCommunityIcons name='close' size={35} color='white' />
        </IconcontainerClose>
      </Iconmaincontainer>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </Container>
  );
};

export default ViewImageScreen;

const Iconmaincontainer = styled.View`
  height: 25px;
  background-color: black;
`;
const Container = styled.View`
  background-color: black;
`;

const IconcontainerClose = styled.View`
  position: absolute;
  top: 30px;
  left: 20px;
`;
const Iconcontainer = styled.View`
  position: absolute;
  top: 30px;
  right: 20px;
`;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
