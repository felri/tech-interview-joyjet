import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./styles.js";

export interface Props {
  navigation: object;
}

export const FavoriteScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  );
};
