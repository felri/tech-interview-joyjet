import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { HomeScreen } from "./src/screens/Home";
import { ItemScreen } from "./src/screens/Item";
import { FavoriteScreen } from "./src/screens/Favorite";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ItemScreen" component={ItemScreen} />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator initialRouteName="Favorite" headerMode="none">
    <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    <Stack.Screen name="ItemScreen" component={ItemScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Favorites" component={FavoriteStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
