import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class WeclomeScreen extends Component {
  renderLastSlide(i) {
    if (i === this.props.data.length - 1) {
      return (
        <Button
          buttonStyle={styles.buttonStyles}
          title="Onwards!"
          raised
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, i) => {
      console.log("RENDERING SLIDES", slide);
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(i)}
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
  },
  buttonStyles: {
    backgroundColor: "#0288D1",
    marginTop: 20
  }
};
