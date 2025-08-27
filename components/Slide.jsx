// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   Dimensions,
//   StyleSheet,
// } from "react-native";
// import React, { useState } from "react";

// export default function Slide() {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleScroll = (event) => {
//     const { contentOffset } = event.nativeEvent;
//     const page = Math.round(contentOffset.x / Dimensions.get("window").width);
//     setCurrentPage(page);
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={{ margin: 10, height: 200 }}
//       horizontal
//       // pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       onScroll={handleScroll}
//       // scrollEventThrottle={16}
//     >
//       <View style={styles.promoted}>
//         <Image
//           source={require("../assets/kfc.jpeg")}
//           style={{ width: Dimensions.get("window").width - 40, height: 200 }}
//         />
//         <View style={styles.waterMark}>
//           <Text style={{ fontSize: 11, color: "white" }}>Promoted</Text>
//         </View>
//       </View>

//       <View style={styles.promoted}>
//         <Image
//           source={require("../assets/kfc2.jpeg")}
//           style={{ width: Dimensions.get("window").width - 40, height: 200 }}
//         />
//         <View style={styles.waterMark}>
//           <Text style={{ fontSize: 11, color: "white" }}>Promoted</Text>
//         </View>
//       </View>

//       <View style={styles.promoted}>
//         <Image
//           source={require("../assets/kfc3.jpg")}
//           style={{ width: Dimensions.get("window").width - 40, height: 200 }}
//         />
//         <View style={styles.waterMark}>
//           <Text style={{ fontSize: 11, color: "white" }}>Promoted</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   promoted: {
//     height: 200,
//     marginRight: 10,
//     width: Dimensions.get("window").width - 40,
//     overflow: "hidden",
//     borderRadius: 10,
//     backgroundColor: "#D5FDE6",
//   },
//   waterMark: {
//     position: "absolute",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "black",
//     height: 20,
//     width: 60,
//     zIndex: 10,
//   },
// });

import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import Swiper from "react-native-swiper";

const Slide = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      if (
        swiperRef.current &&
        swiperRef.current.state.index < images.length - 1
      ) {
        swiperRef.current.scrollBy(1);
      } else {
        swiperRef.current.scrollBy(-images.length + 1);
      }
    }, 3000);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        autoplay={false}
        loop={false}
        style={styles.promoted}
        pagingEnabled={false}
        paginationStyle={{
          flex: 1,
          padding: 0,
          margin: 0,
          top: 0,
          height: 170,
          borderWidth: 1,
          borderColor: "black",
          position: "absolute",
          display: "none",
        }}
      >
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image source={image} style={styles.image} />
            <View style={styles.waterMark}>
              <Text style={{ fontSize: 11, color: "white" }}>Promoted</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: Dimensions.get("window").width - 20,
    borderRadius: 10,
    // marginBottom: 10,
    overflow: "hidden",
  },
  slide: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 170,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  promoted: {
    height: 170,
    margin: 0,
    padding: 0,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#D5FDE6",
  },
  waterMark: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 20,
    width: 60,
    zIndex: 10,
    top: 0,
    left: 0,
  },
});

export default Slide;
