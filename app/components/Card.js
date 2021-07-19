import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';

const Card = ({ ...props }) => {
  return (
    <Cardcontainer>
      <Cardimage source={props.image} />
      <Cardcontentcontainer>
        <Producttitle>{props.title}</Producttitle>
        <Productprice>{props.subTitle}</Productprice>
      </Cardcontentcontainer>
    </Cardcontainer>
  );
};

export default Card;

const Cardcontainer = styled.View`
  display: flex;
  flex-direction: column;
  border-color: #ccc;
`;

const Cardcontentcontainer = styled.View`
  flex-direction: column;
  padding: 10px;
  border-color: #ccc;
  background-color: #fff;
  overflow: hidden;
`;
const Cardimage = styled.Image`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Producttitle = styled.Text`
  font-size: 15px;
  color: #000;
  font-weight: 800;
  margin-top: 8px;
`;

const Productprice = styled.Text`
  font-size: 15px;
  color: #4ecdc4;
  font-weight: bold;
  margin-top: 5px;
`;
