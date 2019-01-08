import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Review Jobs",
    headerStyle: { marginTop: 10 },
    headerRight: (
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate("settings");
        }}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
        fontSize={12}
      />
    )
  });

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}
