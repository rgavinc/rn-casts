import React from "react";
import styled from "styled-components/native";
import ImageDetail from "../components/ImageDetail";

const View = styled.View``;
const Text = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)};
`;

const ImageScreeen = () => (
  <View>
    <ImageDetail
      title="Forest"
      score={10}
      imageSource={require("../../assets/forest.jpg")}
    />
    <ImageDetail
      title="Beach"
      score={9}
      imageSource={require("../../assets/beach.jpg")}
    />
    <ImageDetail
      title="Mountain"
      score={7}
      imageSource={require("../../assets/mountain.jpg")}
    />
  </View>
);

export default ImageScreeen;
