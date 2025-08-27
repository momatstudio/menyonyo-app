import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default function WelcomeText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        ORDER <Text style={styles.text2}>FOOD</Text>
      </Text>
      <Text style={styles.text1}>
        AT <Text style={styles.text2}>ANY</Text>
      </Text>
      <Text style={styles.text1}>
        <Text style={styles.text2}>RESTAURANT</Text>
      </Text>
      <Text style={styles.text1}>
        IN YOUR <Text style={styles.text2}>AREA</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 380,
  },
  slide: {
    width: Dimensions.get("window").width,
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 37,
    fontWeight: 300,
    paddingBottom: 10,
    color: "#004F22",
  },
  text2: { fontWeight: 500 },
});
