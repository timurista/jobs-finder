import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { Provider, connect } from "react-redux";
import store from "./store";
import { reduxifyNavigator } from "react-navigation-redux-helpers";

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
// const mapStateToProps = state => ({
//   state: state.nav
// });
// const AppWithNavigationState = connect(mapStateToProps)(App);

// class Root extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <AppWithNavigationState />
//       </Provider>
//     );
//   }
// }

export default App;
