import React from "react";
import { Image, Dimensions, View } from "react-native";
import styles from "./styles.js";
import Carousel from "react-native-snap-carousel";

interface Props {
  galery: string[];
}

interface IItem {
  index: number;
  item: string;
}

export const SnapCarousel: React.FC<Props> = ({ galery }) => {
  const carouselRef = React.useRef(null);

  const renderItem = (url: IItem) => {
    //<Image does not work well with http, so we need to change to https
    const pair = Array.from(url.item);
    pair.splice(4, 0, "s");
    const httpsUrl = pair.join("");

    return (
      <>
        <View style={styles.opacity} />
        <Image
          source={{ uri: httpsUrl }}
          style={{ height: 300, width: "100%" }}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop={true}
        ref={carouselRef}
        data={galery}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        layout={"default"}
      />
    </View>
  );
};
