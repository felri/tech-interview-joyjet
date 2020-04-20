import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "src/utils/Text";
import styles from "./styles.js";

interface IItems {
  title: string;
  description: string;
  galery: string[];
}

interface ICategory {
  category: string;
  list: IItems[];
}

interface Props {
  item: ICategory;
}

export const Category: React.FC<Props> = ({ item }) => (
  <View style={styles.container}>
    <Text>{item.category}</Text>
  </View>
);
