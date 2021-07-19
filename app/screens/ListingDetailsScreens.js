import React from 'react';
import styled from 'styled-components';
import { View, Image } from 'react-native';
import ListItem from '../components/ListItem';
export default function ListingDetailsScreens({ ...props }) {
  return (
    <View>
      <Listimage source={require('../assets/jacket.jpg')} />
      <DetailContainer>
        <Detailtitle> Red Jacket</Detailtitle>
        <Detailsubtitle>$100</Detailsubtitle>
        <ListItem
          image={require('../assets/mosh.jpg')}
          title='Mosh Hamedani'
          subtitle='5 listings'
        />
      </DetailContainer>
    </View>
  );
}

const DetailContainer = styled.View`
  padding: 10px;
`;

const Listimage = styled.Image`
  width: 100%;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* box shadow */
`;

const Detailtitle = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  padding-top: 10px;
`;

const Detailsubtitle = styled.Text`
  font-size: 15px;
  color: #000;
  margin-top: 8px;
  font-weight: bold;
  color: #4ecdc4;
`;
