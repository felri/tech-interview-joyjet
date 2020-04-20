import React from "react";
import { Image, Dimensions, View, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import Carousel from "react-native-snap-carousel";

const ArrowRightPng = require("src/assets/imgs/arrow_right.png");
const ArrowLeftPng = require("src/assets/imgs/arrow_left.png");

interface Props {
  galery: string[];
}

interface IItem {
  index: number;
  item: string;
}

export const SnapCarousel: React.FC<Props> = ({ galery }) => {
  const carouselRef = React.useRef(null);

  const onPrev = React.useCallback(() => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToPrev();
    }
  }, [carouselRef]);

  const onNext = React.useCallback(() => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  }, [carouselRef]);

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
      <TouchableOpacity style={styles.containerLeftArrow} onPress={onPrev}>
        <Image source={ArrowLeftPng} style={{ height: 30, width: 15 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerRightArrow} onPress={onNext}>
        <Image source={ArrowRightPng} style={{ height: 30, width: 15 }} />
      </TouchableOpacity>
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
