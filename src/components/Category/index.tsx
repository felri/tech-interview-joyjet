import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "src/utils/Text";
import styles from "./styles.js";
import { ICategory, IItems } from "src/utils/interface";
import { Item } from "src/components/Item";

interface Props {
  item: ICategory;
  navigation: any;
}

export const Category: React.FC<Props> = ({ item, navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerTextCategory}>
      <Text style={styles.textCategory} fontWeight="bold">
        {item.category}
      </Text>
    </View>
    {item.items.length > 0 &&
      item.items.map((item: IItems, index: number) => (
        <Item key={index} item={item} navigation={navigation} />
      ))}
  </View>
);
