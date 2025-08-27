import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import SignInWithPhoneNo from "../screens/SignInWithPhoneNo";
import PhoneVerificationPage from "../screens/PhoneVerificationPage";

const Stack = createNativeStackNavigator();

export default function AuthStack({ setUserToken }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
      <Stack.Screen name="LoginScreen" component={SignIn} />
      <Stack.Screen name="Phone SignIn" component={SignInWithPhoneNo} />
      <Stack.Screen
        name="Phone Verification"
        component={PhoneVerificationPage}
      />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
}
