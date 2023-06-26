import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignIn from './screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "./screens/SignUp";


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { <Stack.Screen name="SignIn" component={SignIn} />}
        { <Stack.Screen name="SignUp" component={SignUp} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
