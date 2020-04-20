import React from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./src/redux/favorites";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { HomeScreen } from "./src/screens/Home";
import { ItemScreen } from "./src/screens/Item";
import { FavoriteScreen } from "./src/screens/Favorite";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import CustomDrawer from "./src/components/CustomDrawer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

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
  let [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("./src/assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <Drawer.Navigator
                initialRouteName="Home"
                drawerPosition="right"
                drawerContent={(props) => <CustomDrawer {...props} />}
              >
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Favorites" component={FavoriteStack} />
              </Drawer.Navigator>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
