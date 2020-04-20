import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "src/utils/Text";
import styles from "./styles.js";
import { useSafeArea } from "react-native-safe-area-context";

import menuIcon from "src/assets/imgs/ic_menu.png";

export interface Props {
  navigation: any;
  title: string;
}

export const HeaderBar: React.FC<Props> = ({ navigation, title }) => {
  const insets = useSafeArea();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Text style={{ color: "#3694de" }}>{title}</Text>
      <TouchableOpacity
        style={styles.containerBtnMenu}
        onPress={() => navigation.toggleDrawer()}
      >
        <Image source={menuIcon} height={40} width={40} />
      </TouchableOpacity>
    </View>
  );
};
