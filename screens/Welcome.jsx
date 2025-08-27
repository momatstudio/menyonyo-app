import  { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import WelcomeText from "../components/WelcomeText";

export default function Welcome({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const page = Math.round(contentOffset.x / Dimensions.get("window").width);
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={ScrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={[styles.slide, styles.slide1]}></View>
        <View style={[styles.slide, styles.slide2]}></View>
        <View style={[styles.slide, styles.slide3]}></View>
      </ScrollView>

      <WelcomeText />

      <View style={styles.pagination}>
        {[...Array(3).keys()].map((index) => (
          <Text
            key={index}
            style={[
              styles.paginationDot,
              currentPage === index && styles.paginationDotActive,
            ]}
          >
            &bull;
          </Text>
        ))}
      </View>

      {/* <TouchableOpacity
        style={[styles.button, styles.button1]}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={{ color: "#000000", fontSize: 12 }}>SIGN UP</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={[styles.button, styles.button2]}
        onPress={() => navigation.navigate("Phone SignIn")}
      >
        <Text style={{ color: "white", fontSize: 12 }}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    width: Dimensions.get("window").width,
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
    // borderBottomLeftRadius: 100,
  },
  slide1: {
    backgroundColor: "#F0D4FD",
  },
  slide2: {
    backgroundColor: "#FDF4D5",
  },
  slide3: {
    backgroundColor: "#D4FDE5",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 190,
  },
  paginationDot: {
    color: "#fff",
    fontSize: 70,
    // marginHorizontal: 4,
  },
  paginationDotActive: {
    color: "#FF1111",
  },
  button: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 50,
    borderRadius: 40,
  },
  button1: {
    bottom: 60,

    borderWidth: 1,
    borderColor: "#FF1111",
  },
  button2: {
    bottom: 120,
    backgroundColor: "#FF1111",
  },
});
