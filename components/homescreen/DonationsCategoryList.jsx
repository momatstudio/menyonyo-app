import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slide from "../Slide";
import { images } from "../../data";
import { size } from "../../data/style";

export default function DonationsCategoryList({ restaurants, navigation }) {
  // Container
  const renderContainer = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("SingleRestuarant")}>
      <View style={styles.donationContainer}>
        <View style={styles.image}>
          <Image
            source={{ uri: item.image }}
            style={{
              height: 140,
              width: "100%",
              overflow: "hidden",
              zIndex: 50,
            }}
          />
        </View>
        <Text style={styles.donationHeadingText}>{item.name}</Text>
        <Text style={styles.donationDescriptionText}>
          {item.address.substr(0, 60) + (item.address.length > 60 ? "..." : "")}
        </Text>
        <View style={styles.donationSubText}>
          <Text style={styles.period}>
            {"Price Range: " + item.price_range}
          </Text>
          <TouchableOpacity>
            <MaterialIcons
              name="favorite-border"
              size={20}
              style={{ color: "white" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }) => (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.categoryTitle}>{item.category}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item.restaurants}
        renderItem={renderContainer}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );

  return (
    //<ScrollView contentContainerStyle={{ margin: 10 }}>
    // <Slide images={images} />
    <FlatList
      data={restaurants}
      keyExtractor={(item, index) => index.toString()}
      vertical
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 0, zIndex: 50 }}
      renderItem={renderCategory}
      contentContainerStyle={{ paddingVertical: 20, marginBottom: 250 }}
    />
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  donationContainer: {
    width: "100%",
    height: 220,
    paddingTop: 2,
    // borderWidth: 1,
    // borderColor: "#f8f2f2",
  },
  image: {
    flex: 1,
    height: 120,
    width: size.ScreenWidth - 70,
    borderRadius: 5,
    margin: 10,
  },
  donationHeadingText: {
    fontSize: 15,
    paddingBottom: 2,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  donationDescriptionText: {
    fontSize: 12,
    paddingLeft: 10,
  },
  period: {
    paddingRight: 10,
    // alignSelf: "flex-end",
    fontSize: 10,
    fontWeight: "bold",
  },
  donationSubText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 10,
    // paddingTop: 15,
    padding: 10,
  },
  viewAllText: {
    paddingBottom: 10,
    padding: 10,
    // color: "orange",
  },
});
