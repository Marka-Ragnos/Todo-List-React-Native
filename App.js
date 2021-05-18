import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import ListItem from "./components/list-item";
import Form from "./components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", key: "1" },
    { text: "Помыть машину", key: "2" },
    { text: "Купить картошку", key: "3" },
    { text: "Стать миллионером", key: "4" },
  ]);

  const addHandler = (text) => {
    if (text.trim().length < 5) {
      Alert.alert("Ошибка", "Введите не менее 5 символов");
    }
    setListOfItems((list) => {
      return [{ text, key: Math.random().toString(36).substring(7) }, ...list];
    });
  };

  const deleteHandler = (key) => {
    Alert.alert("Удаление", "Вы точно хотите удалить?", [
      {
        text: "Да",
        onPress: () =>
          setListOfItems((list) => {
            return list.filter((item) => item.key !== key);
          }),
      },
      { text: "Нет" },
    ]);
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
