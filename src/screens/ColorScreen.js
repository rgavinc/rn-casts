import React, { useState } from "react";
import { View, Button, FlatList } from "../components/basicComponents";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <>
      <Button
        title="Add a Color"
        onPress={() => setColors([...colors, randomRgb()])}
      ></Button>
      <FlatList
        keyExtractor={color => color}
        data={colors}
        renderItem={({ item }) => (
          <View height={100} width={100} backgroundColor={item} />
        )}
      />
    </>
  );
};

const randomRgb = () => {
  const getColorNum = () => Math.floor(Math.random() * 256);

  return `rgb(${getColorNum()}, ${getColorNum()}, ${getColorNum()})`;
};

export default ColorScreen;
