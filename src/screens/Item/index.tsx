import React from "react";
import { Image, TouchableOpacity, ScrollView, View } from "react-native";
import styles from "./styles.js";
import { SnapCarousel } from "src/components/SnapCarousel";
import { Text } from "src/utils/Text";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/redux/favorites/types";

const favoriteBtn = require("src/assets/imgs/ic_star.png");
const favoriteBtnSelected = require("src/assets/imgs/star.png");
const backBtn = require("src/assets/imgs/ic_back.png");

export interface Props {
  navigation: object;
  route: object;
}

interface IText {
  text: string;
}
interface IBtn {
  onPress?: Function;
  favorite?: boolean;
}

const Favorite: React.FC<IBtn> = ({ onPress, favorite }) => (
  <TouchableOpacity style={styles.containerFavoriteBtn} onPress={onPress}>
    <Image
      source={favorite ? favoriteBtnSelected : favoriteBtn}
      style={{ width: 35, height: 33 }}
    />
  </TouchableOpacity>
);

const Back: React.FC<IBtn> = ({ onPress }) => (
  <TouchableOpacity style={styles.containerBackBtn} onPress={onPress}>
    <Image source={backBtn} style={{ width: 35, height: 20 }} />
  </TouchableOpacity>
);

const Title: React.FC<IText> = ({ text }) => (
  <View>
    <Text style={styles.title} fontWeight="bold">
      {text.toUpperCase()}
    </Text>
  </View>
);

const Category: React.FC<IText> = ({ text }) => (
  <View>
    <Text style={styles.category} fontWeight="thin">
      {text.toLocaleLowerCase()}
    </Text>
  </View>
);

const Description: React.FC<IText> = ({ text }) => (
  <View>
    <Text style={styles.description}>{text}</Text>
  </View>
);

export const ItemScreen: React.FC<Props> = ({ route, navigation }) => {
  const { item, category } = route.params;
  const [favorite, setFavorite] = React.useState<boolean>(false);

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  React.useEffect(() => {
    //check if item is saved inside favorites redux
    const result: number = favorites.list.findIndex(
      (f) => f.item.title === item.title && f.category === category
    );
    setFavorite(result !== -1);
  }, [favorites]);

  const handleFavorite = () => {
    dispatch({
      type: actions.TOOGLE_FAVORITE,
      payload: {
        item: item,
        category: category,
      },
    });
  };

  return (
    <ScrollView>
      <Favorite favorite={favorite} onPress={handleFavorite} />
      <Back onPress={() => navigation.pop()} />
      <SnapCarousel galery={item.galery} />
      <View style={styles.containerInfo}>
        <Title text={item.title} />
        <Category text={category} />
        <Description text={item.description} />
      </View>
    </ScrollView>
  );
};
