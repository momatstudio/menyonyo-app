import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import Messages from "../screens/OrderDetails";
import HomeStack from "./HomeStack";
import Search from "../screens/Search";
import OrderDetails from "../screens/OrderDetails";

const Tab = createBottomTabNavigator();

export default HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let color;
            color = focused ? "orange" : "black";
            return <AntDesign name="home" size={24} style={{ color: color }} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            let color = focused ? "orange" : "black";

            return (
              <AntDesign name="search1" size={24} style={{ color: color }} />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderDetails}
        options={{
          tabBarIcon: ({ focused }) => {
            let color = focused ? "orange" : "black";
            return (
              <Octicons name="checklist" size={24} style={{ color: color }} />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            let color = focused ? "orange" : "black";
            return (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={24}
                style={{ color: color }}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
