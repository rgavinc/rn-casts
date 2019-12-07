import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)};
`;

const View = styled.View``;

const Image = styled.Image``;

const ImageDetail = ({ title, imageSource, score }) => (
  <View>
    <Image source={imageSource} />
    <Text>{`${title}\nImage score - ${score}`}</Text>
  </View>
);

export default ImageDetail;
