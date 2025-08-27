import { View, StyleSheet } from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Address from "../components/homescreen/Address";
import Categories from "../components/homescreen/Categories";
import { restaurantsInfo } from "../data";
import DonationsCategoryList from "../components/homescreen/DonationsCategoryList";
import CurrentLocation from "../bottomSheets/CurrentLocation";
export default function Homescreen({ navigation }) {
  const [sheetActive, setSheetActive] = useState(false);
  // BOTTOM SHEET
  const bottomSheetModalRef = useRef(1);

  useEffect(() => {
    const openBottomSheetHandler = () => {
      bottomSheetModalRef.current.present();
    };

    openBottomSheetHandler();
  }, []);

  const closeBottomSheet = () => {
    bottomSheetModalRef.current.dismiss();
  };
  const snapPoints = useMemo(() => ["40%"], []);

  const sheetChangesHandler = useCallback((index) => {
    console.log("handleSheetChanges", index);
    index === 0 ? setSheetActive(true) : setSheetActive(false);
  }, []);
  console.log(sheetActive);

  return (
    <View style={styles.container}>
      <Address navigation={navigation} />

      <Categories restaurants={restaurantsInfo} navigation={navigation} />

      <DonationsCategoryList
        restaurants={restaurantsInfo}
        navigation={navigation}
      />
      <CurrentLocation
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        sheetChangesHandler={sheetChangesHandler}
        closeBottomSheet={closeBottomSheet}
      />
      {/* <RestaurantsList /> */}
      {/* <NoRestaurant /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
