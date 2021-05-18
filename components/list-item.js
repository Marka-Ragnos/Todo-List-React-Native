import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <View>
      <TouchableHighlight>
        <Text style={styles.text} onLongPress={() => deleteHandler(el.key)}>
          {el.text}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "thistle",
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",
  },
});
