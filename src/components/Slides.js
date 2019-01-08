import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class WeclomeScreen extends Component {
  renderSlides() {
    return this.props.data.map(slide => {
      console.log("RENDERING SLIDES", slide);
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center"
  }
};
