import React from "react";
import { View, ScrollView } from "react-native";
import { HeaderBar } from "src/components/HeaderBar";
import { useSelector } from "react-redux";
import { Text } from "src/utils/Text";
import { Item } from "src/components/Item";

import styles from "./styles.js";

const Empty: React.FC<{}> = () => (
  <View style={styles.containerFavorites}>
    <Text>No favorites</Text>
  </View>
);

export interface Props {
  navigation: object;
}

export const FavoriteScreen: React.FC<Props> = ({ navigation }) => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View style={styles.container}>
      <HeaderBar title="Favorites" navigation={navigation} />
      <ScrollView
        style={styles.containerScrollView}
        contentContainerStyle={{ flexGrow: favorites.list.length ? 0 : 1 }}
      >
        {favorites.list.length ? (
          favorites.list.map((favorite, index) => (
            <Item
              key={index}
              item={favorite.item}
              category={favorite.category}
              navigation={navigation}
            />
          ))
        ) : (
          <Empty />
        )}
      </ScrollView>
    </View>
  );
};
