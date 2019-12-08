import React from "react";
import { Text, Button } from "../components/basicComponents";
const COLOR_INCREMENT = 15;
const ColorCounter = ({ color, setColor, value, cantChange }) => {
  return (
    <>
      <Text>{color}</Text>
      <Button
        disabled={cantChange(value + COLOR_INCREMENT)}
        onPress={() => setColor(COLOR_INCREMENT)}
        title={`Increase ${color}`}
      />
      <Button
        disabled={cantChange(value - COLOR_INCREMENT)}
        onPress={() => setColor(-1 * COLOR_INCREMENT)}
        title={`Decrease ${color}`}
      />
    </>
  );
};

export default ColorCounter;
