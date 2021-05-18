import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");

  const onChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder={"Введите текст"}
      />
      <Button title="Добавить задачу" onPress={() => addHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 30,
    width: "60%",
    marginHorizontal: "20%",
  },
});
