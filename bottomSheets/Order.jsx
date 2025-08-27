import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { deco, size } from "../data/style";
import { CheckBox } from "react-native-elements";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { decrementHandler, incrementHandler } from "../functionalities/methods";

export default function Order({
  closeBottomSheet,
  bottomSheetModalRef,
  snapPoints,
  sheetChangesHandler,
}) {
  const [number, setNumber] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (number === 0) closeBottomSheet;
  }, [number]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={sheetChangesHandler}
      >
        <BottomSheetScrollView
          // stickyHeaderIndices={[0]}
          contentContainerStyle={styles.container}
        >
          <View style={styles.cover}>
            <Image
              source={require("../assets/kota.jpg")}
              style={{
                width: "100%",
                height: 200,
              }}
            />
            <TouchableOpacity
              style={styles.touchable2}
              onPress={closeBottomSheet}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>Motobike Kota</Text>
          <Text style={styles.text2}>Chips, Palon, Vianna</Text>
          <Text style={styles.text3}>R15,00</Text>

          <View style={styles.view3}>
            <Text style={styles.text4}>Special Instructions</Text>
            <View style={styles.view4}>
              <TextInput
                multiline
                numberOfLines={4}
                //   value={text}
                //   onChangeText={handleChangeText}
                placeholder="Add extra source (no onion, etc)"
                style={styles.textInput}
              />
            </View>
            <View style={styles.view5}>
              <TouchableOpacity onPress={decrementHandler}>
                <AntDesign name="minussquareo" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.text5}>{number}</Text>
              <TouchableOpacity onPress={incrementHandler}>
                <AntDesign name="plussquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.view3}>
            <Text style={styles.text4}>Extras</Text>
          </View>

          <View>
            <View style={[styles.view3, styles.view3_1]}>
              <Text>Cheese</Text>
              <CheckBox
                checked={isChecked}
                onPress={handleCheckboxChange}
                checkedColor={"orange"}
                uncheckedColor={deco.black}
              />
            </View>
            <View style={[styles.view3, styles.view3_1]}>
              <Text>eggs</Text>
              <CheckBox
                checked={isChecked}
                onPress={handleCheckboxChange}
                checkedColor={"orange"}
                uncheckedColor={deco.black}
              />
            </View>
            <View style={[styles.view3, styles.view3_1]}>
              <Text>Vianna</Text>
              <CheckBox
                checked={isChecked}
                onPress={handleCheckboxChange}
                checkedColor={"orange"}
                uncheckedColor={deco.black}
              />
            </View>
            <View style={[styles.view3, styles.view3_1]}>
              <Text>Russion</Text>
              <CheckBox
                checked={isChecked}
                onPress={handleCheckboxChange}
                checkedColor={"orange"}
                uncheckedColor={deco.black}
              />
            </View>
            <View style={[styles.view3, styles.view3_1]}>
              <Text>Fanta Orange 500ml</Text>
              <CheckBox
                checked={isChecked}
                onPress={handleCheckboxChange}
                checkedColor={"orange"}
                uncheckedColor={deco.black}
              />
            </View>
          </View>
        </BottomSheetScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: deco.white, fontWeight: 600 }}>
            {"ADD TO CART"}
          </Text>
          <Text style={{ color: deco.white, fontWeight: 600 }}>{"R35,00"}</Text>
        </TouchableOpacity>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: deco.white,
  },
  cover: {
    justifyContent: "center",
    width: "100%",
    backgroundColor: deco.white,
    height: 200,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // borderRadius: 10,
    // overflow: "hidden",
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
    marginHorizontal: 20,
    borderRadius: 20,
    right: 5,
    top: 10,
  },

  text1: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 600,
  },
  text2: {
    alignSelf: "center",
  },

  text3: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: 600,
    color: "orange",
  },
  view3: {
    padding: 10,
    marginTop: 10,
    backgroundColor: deco.white,
    width: size.ScreenWidth,
  },
  view3_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  view4: {
    backgroundColor: deco.gray,
    width: size.ScreenWidth - 40,
    height: 150,
    alignSelf: "center",
  },
  text4: {
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 10,
    fontWeight: 500,
    color: deco.black,
  },
  view5: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
  },
  text5: {
    textAlign: "center",
    textAlignVertical: "center",
    padding: 5,
    fontWeight: 600,
    fontSize: 20,
    backgroundColor: deco.gray,
    borderRadius: 10,
    color: "orange",
  },
  button: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: deco.green,
    height: 60,
    width: 200,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    bottom: 40,
  },
  textInput: {
    height: 150,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
