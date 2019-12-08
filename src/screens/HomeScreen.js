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
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      />
      <Button onPress={() => navigation.navigate("Text")} title="Text Demo" />
    </View>
  );
};

export default HomeScreen;
