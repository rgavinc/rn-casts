import React, { useState } from "react";
import { Text, TextInput, View } from "../components/basicComponents";

const TextScreen = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newInput => setInput(newInput)}
        value={input}
      />
      <Text>{input}</Text>
      {input && input.length < 5 ? (
        <Text color="red">
          Please provide a password that is at least 5 characters
        </Text>
      ) : null}
    </>
  );
};

export default TextScreen;
