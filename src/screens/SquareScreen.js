import React, { useReducer } from "react";
import { View, FlatList } from "../components/basicComponents";
import ColorCounter from "../components/ColorCounter";

const cantChange = value => value > MAX || value < MIN;
const MIN = 0;
const MAX = 255;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change_red":
      const red = state.red + payload;
      return cantChange(red) ? state : { ...state, red };
    case "change_blue":
      const blue = state.blue + payload;
      return cantChange(blue) ? state : { ...state, blue };
    case "change_green":
      const green = state.green + payload;
      return cantChange(green) ? state : { ...state, green };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  const setColor = type => payload => dispatch({ type, payload });

  return (
    <>
      <FlatList
        keyExtractor={({ color }) => color}
        data={[
          { color: "Red", setColor: setColor("change_red"), value: red },
          { color: "Blue", setColor: setColor("change_blue"), value: blue },
          { color: "Green", setColor: setColor("change_green"), value: green }
        ]}
        renderItem={({ item }) => <ColorCounter {...{ ...item, cantChange }} />}
      />
      <View
        height={150}
        width={150}
        backgroundColor={`rgb(${red},${green},${blue})`}
      />
    </>
  );
};

export default SquareScreen;
