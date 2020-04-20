import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "src/utils/Text";
import styles from "./styles.js";
import { IItems } from "src/utils/interface";
import { SnapCarousel } from "src/components/SnapCarousel";

interface Props {
  item: IItems;
  handleClick: Function;
}

export const Item: React.FC<Props> = ({ item, handleClick }) => (
  <View style={styles.container}>
    <SnapCarousel galery={item.galery} />
    <TouchableOpacity style={styles.containerTextItem} onPress={handleClick}>
      <Text style={styles.textItem} fontWeight="bold">
        {item.title}
      </Text>
      <Text style={styles.textDescription}>
        {item.description.split(".").shift()}
      </Text>
    </TouchableOpacity>
  </View>
);
