import React from "react";
import styled from "styled-components";

const FlatList = styled.FlatList`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)};
`;
const Text = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)};
  margin-bottom: 50;
`;

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 21 },
    { name: "Friend #3", age: 22 },
    { name: "Friend #4", age: 23 },
    { name: "Friend #5", age: 24 },
    { name: "Friend #6", age: 25 },
    { name: "Friend #7", age: 26 },
    { name: "Friend #8", age: 27 },
    { name: "Friend #9", age: 28 }
  ];

  return (
    <FlatList
      keyExtractor={({ name }) => name}
      data={friends}
      renderItem={({ item: { name, age } }) => (
        <Text fontSize={40}>{`${name} - Age ${age}`}</Text>
      )}
    >
      List Screen
    </FlatList>
  );
};

export default ListScreen;
