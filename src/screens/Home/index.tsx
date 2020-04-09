import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./styles.js";

import { HeaderBar } from "src/components/HeaderBar";

export interface Props {
  navigation: object;
}

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar title="Digital Space" navigation={navigation} />
      <Text>Home</Text>
    </View>
  );
};
