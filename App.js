import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import AuthScreen from "./src/screens/AuthScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
