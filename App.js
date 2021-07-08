import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import List from "./__tests__/component/List";

class App extends React.Component {
  render() {
    return (
      <View style={app.container}>
        <List />
      </View>
    );
  }
}

const app = StyleSheet.create({
  container: {
    padding: 20,
    margin: 30,
    backgroundColor :"#d1d1e0"
  },
});

export default App;
