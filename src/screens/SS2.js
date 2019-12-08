import React, { useState } from "react";
import { View } from "../components/basicComponents";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = color => change => {
    const colorValue = { red, green, blue }[color];
    if (colorValue + change > 255 || colorValue + change < 0) return;
    const colorSet = { red: setRed, green: setGreen, blue: setBlue }[color];
    colorSet(colorValue + change);
  };

  return (
    <>
      <ColorCounter setColor={setColor("red")} color="Red" value={red} />
      <ColorCounter setColor={setColor("blue")} color="Blue" value={blue} />
      <ColorCounter setColor={setColor("green")} color="Green" value={green} />
      <View
        height={150}
        width={150}
        backgroundColor={`rgb(${red},${green},${blue})`}
      />
    </>
  );
};

export default SquareScreen;
