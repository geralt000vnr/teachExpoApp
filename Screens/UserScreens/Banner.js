import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState } from "react";
import { useRef } from "react";
import img1 from "../../assets/profileImg1.jpg";
import img2 from "../../assets/profileImg.jpeg";
import { useCallback } from "react";

const Banner = () => {
  const images = [img1, img2, img1];
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const renderItem = useCallback(
    ({ item, index }) => (
      <Image
        style={{ width: "100%", height: 170, borderRadius: 10 }}
        source={item}
      />
    ),
    [],
  );
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Carousel
          layout="default"
          ref={ref}
          data={images}
          sliderWidth={1}
          //   itemWidth={5}
          itemWidth={Dimensions.get("window").width - 22}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={4000}
          loop={true}
        />
      </View>
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeIndex}
        containerStyle={{ marginTop: -20, marginBottom: -30 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: "#F85403",
        }}
        inactiveDotOpacity={0.5}
        inactiveDotScale={0.6}
        animatedDuration={1000}
      />
    </View>
  );
};

export default Banner;
