import React from 'react';
import styled from 'styled-components';

export default function ListItem({ ...props }) {
  return (
    <Listitemcontainer>
      <Listitemimage source={props.image} />
      <Listitemcontentcontainer>
        <Listitemtitle>{props.title}</Listitemtitle>
        <Listitemsubtitle>{props.subtitle}</Listitemsubtitle>
      </Listitemcontentcontainer>
    </Listitemcontainer>
  );
}

const Listitemcontainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;
const Listitemimage = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;
const Listitemcontentcontainer = styled.View`
  margin: 5px 0;
`;
const Listitemtitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
const Listitemsubtitle = styled.Text`
  font-size: 13px;
  color: #999;
`;
