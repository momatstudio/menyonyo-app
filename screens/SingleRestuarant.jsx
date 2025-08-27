import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { Ionicons, AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { deco, size } from "../data/style";
import { images } from "../data";
import MenuContainer from "../components/SingleRestaurant/MenuContainer";
import Order from "../bottomSheets/Order";
import BottomSheet from "@gorhom/bottom-sheet";
import { useState } from "react";

export default function SingleRestuarant({ navigation }) {
  const [sheetActive, setSheetActive] = useState(false);
  // BOTTOM SHEET
  const bottomSheetModalRef = useRef(1);

  const openBottomSheetHandler = () => {
    bottomSheetModalRef.current.present();
  };
  const closeBottomSheet = () => {
    bottomSheetModalRef.current.dismiss();
  };
  const snapPoints = useMemo(() => ["90%"], []);

  const sheetChangesHandler = useCallback((index) => {
    console.log("handleSheetChanges", index);
    index === 0 ? setSheetActive(true) : setSheetActive(false);
  }, []);
  console.log(sheetActive);
  return (
    <>
      <ScrollView>
        <Animated.View
          style={sheetActive ? styles.sheet_active : styles.container}
        >
          <View style={styles.cover}>
            <Image
              source={require("../assets/kota.jpg")}
              style={{ width: "100%", height: 200 }}
            />
            <TouchableOpacity
              style={styles.touchable1}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="ios-arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable2}>
              <Entypo name="share" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.view3}>
            <Text style={styles.text1}>Restuarant A</Text>
            <View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <AntDesign name="star" size={15} color="black" />
                  <Text style={{ fontSize: size.small }}>4.3 (63 Ratings)</Text>
                </View>
                <View
                  style={[
                    styles.view4,
                    { width: size.ScreenWidth - 90, paddingTop: 0 },
                  ]}
                />
                <TouchableOpacity style={styles.touchable3}>
                  <View>
                    <Text style={{ fontSize: size.small }}>
                      Open until 7 PM
                    </Text>
                    <Text style={{ fontSize: size.small }}>
                      Tap for more info
                    </Text>
                  </View>
                  <Ionicons
                    name="ios-chevron-forward-sharp"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.view3}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="delivery-dining"
                size={24}
                color="black"
                style={{ paddingRight: 10 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: size.ScreenWidth - 100,
                }}
              >
                <Text style={styles.text2}>R10,00</Text>
                <Text style={styles.text2}>10 - 20 min</Text>
              </View>
            </View>
            <View style={styles.view4} />
            <TouchableOpacity style={styles.touchable4}>
              <Text style={{ paddingTop: 15 }}>CONTACT US</Text>
              <Ionicons
                name="ios-chevron-forward-sharp"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.view3}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Menu</Text>
          </View>
          <TouchableOpacity onPress={openBottomSheetHandler}>
            <MenuContainer />
          </TouchableOpacity>

          <TouchableOpacity onPress={openBottomSheetHandler}>
            <MenuContainer />
          </TouchableOpacity>

          <TouchableOpacity onPress={openBottomSheetHandler}>
            <MenuContainer />
          </TouchableOpacity>

          <TouchableOpacity onPress={openBottomSheetHandler}>
            <MenuContainer />
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
      <Order
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        sheetChangesHandler={sheetChangesHandler}
        closeBottomSheet={closeBottomSheet}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: deco.gray,
    width: size.ScreenWidth,
    backgroundColor: deco.white,
  },
  sheet_active: {
    flex: 1,
    alignItems: "center",
    backgroundColor: deco.gray,
    width: size.ScreenWidth,
    opacity: 0.2,
  },
  cover: {
    width: "100%",
    height: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  touchable1: {
    position: "absolute",
    padding: 5,
    backgroundColor: deco.white,
    margin: 10,
    borderRadius: 20,
    top: 10,
  },
  touchable2: {
    position: "absolute",
    padding: 5,
    backgroundColor: deco.white,
    margin: 10,
    borderRadius: 20,
    right: 5,
    top: 10,
  },
  touchable3: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  touchable4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
  },
  view3: {
    justifyContent: "center",
    height: "auto",
    width: Dimensions.get("screen").width - 20,
    backgroundColor: deco.white,
    marginTop: 10,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  view3_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    overflow: "hidden",
  },
  text1: {
    fontSize: 25,
    fontWeight: 600,
  },
  text2: {
    fontSize: 14,
    fontWeight: 400,
  },
  view4: {
    borderBottomWidth: 1,
    borderBottomColor: deco.gray,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
