import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "src/utils/Text";
import styles from "./styles.js";
import { IItems } from "src/utils/interface";
import { SnapCarousel } from "src/components/SnapCarousel";

interface Props {
  item: IItems;
  category: string;
  navigation: object;
}

export const Item: React.FC<Props> = ({ item, category, navigation }) => {
  const handleClick = () => {
    navigation.navigate("ItemScreen", { item: item, category: category });
  };
  return (
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
};
