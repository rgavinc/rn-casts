import React from "react";
import styled from "styled-components/native";

export const Text = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)};
  color: ${({ color }) => (color ? color : "black")};
`;

export const View = styled.View`
  height: ${({ height }) => (height ? height : 0)};
  width: ${({ width }) => (width ? width : 0)};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 0};
`;

export const Image = styled.Image``;

export const Button = styled.Button``;

export const FlatList = styled.FlatList``;

export const TextInput = styled.TextInput`
  margin: 15px;
  border-color: black;
  border-width: 1;
`;
