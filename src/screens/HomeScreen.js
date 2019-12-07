import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)};
`;

const View = styled.View``;

const Button = styled.Button``;

const TouchableOpacity = styled.TouchableOpacity``;

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
    </View>
  );
};

export default HomeScreen;
