import React, { useReducer } from "react";
import { Text, Button } from "../components/basicComponents";

const reducer = (state, { type, payload }) => {
  const { counter } = state;
  switch (type) {
    case "change_counter":
      return { ...state, counter: counter + payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <>
      <Text>{`Current Count: ${counter}`}</Text>
      <Button
        onPress={() => dispatch({ type: "change_counter", payload: 1 })}
        title="Increment Counter"
      />
      <Button
        onPress={() => dispatch({ type: "change_counter", payload: -1 })}
        title="Decrement Counter"
      />
    </>
  );
};

export default CounterScreen;
