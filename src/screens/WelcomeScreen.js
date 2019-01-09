import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to Job Finder", color: "#03A9F4" },
  { text: "Job Finder will help you get a job", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}
