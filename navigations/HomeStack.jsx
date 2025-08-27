import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "../screens/Homescreen";
import Search from "../screens/Search";
import NewAddress from "../screens/NewAddress";
import SingleRestuarant from "../screens/SingleRestuarant";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Delivery Address"
        component={NewAddress}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SingleRestuarant" component={SingleRestuarant} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
