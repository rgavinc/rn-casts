import React from "react";
import styled from "styled-components";

const Text = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)};
`;

const ListScreen = () => {
  return <Text>List Screen</Text>;
};

export default ListScreen;
