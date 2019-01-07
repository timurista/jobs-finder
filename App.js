import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import AuthScreen from "./src/screens/AuthScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MapScreen from "./src/screens/MapScreen";
import DeckScreen from "./src/screens/DeckScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ReviewScreen from "./src/screens/ReviewScreen";

const ReviewStack = createStackNavigator({
  review: ReviewScreen,
  settings: SettingsScreen
});

ReviewStack.navigationOptions = {
  title: "Review Jobs"
};

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: ReviewStack
      }
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;
