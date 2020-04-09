import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import styles from "./styles.js";
import { useSafeArea } from "react-native-safe-area-context";

import menuIcon from "src/assets/ic_menu.png";

export interface Props {
  navigation: object;
  title: string;
}

export const HeaderBar: React.FC<Props> = ({ navigation, title }) => {
  const insets = useSafeArea();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Text>{title}</Text>
      <TouchableOpacity
        style={styles.containerBtnMenu}
        onPress={() => navigation.toggleDrawer()}
      >
        <Image source={menuIcon} height={40} width={40} />
      </TouchableOpacity>
    </View>
  );
};
