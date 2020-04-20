import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "src/utils/Text";
import styles from "./styles.js";
import { IItems } from "src/utils/interface";
import { SnapCarousel } from "src/components/SnapCarousel";

interface Props {
  item: IItems;
}

export const Item: React.FC<Props> = ({ item }) => (
  <View style={styles.container}>
    <SnapCarousel galery={item.galery} />
    <Text>{item.title}</Text>
    <Text>{item.description.split(".").shift()}</Text>
  </View>
);