import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Swiper from "react-native-swiper";

export function ViewStatusScreen({ route }) {
  const { statusImages } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {statusImages.map((statusImage, index) => (
          <View style={styles.slide} key={index}>
            <Image
              source={statusImage}
              style={styles.statusImage}
              resizeMode="contain"
            />
          </View>
        ))}
      </Swiper>
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>
          {currentIndex + 1}/{statusImages.length}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  statusImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  statusBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  statusBarText: {
    color: "white",
    fontSize: 16,
  },
});

export default ViewStatusScreen;
