import React from "react";
import styled from "styled-components";

const Text = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)};
`;

const View = styled.View``;

const ComponentsScreen = () => {
  const yourName = "Gavin Robertson";
  return (
    <View>
      <Text fontSize={45}>Getting started with React Native!</Text>
      <Text>My name is {yourName}</Text>
    </View>
  );
};

export default ComponentsScreen;
