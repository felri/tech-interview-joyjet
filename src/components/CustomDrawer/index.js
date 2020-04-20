import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "src/utils/Text";
import styles from "./styles.js";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import menuIcon from "src/assets/imgs/ic_joyjet.png";

export default (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerItems}>
          <DrawerItemList
            {...props}
            activeTintColor={'#3694de'}
            activeBackgroundColor={'#434343'}
            inactiveTintColor={'white'}
            labelStyle={styles.label}
            style={styles.containerLabel}
          />
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.containerImage}>
            <Image source={menuIcon} style={{ height: 120, width: 120 }} />
          </View>
          <View style={styles.containerName}>
            <Text style={styles.textName} fontWeight="bold">
              JOYJET
          </Text>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}