import React, { Component } from "react";
import { StyleSheet, FlatList, View, Text, Image } from "react-native";
// import {Card} from 'react-native-card';
import Img from "./Img";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    try {
      const result = await fetch("http://restcountries.eu/rest/v2/all");
      const country = await result.json();
      this.setState({
        countries: country,
      });
      console.log(this.state.country);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
        <FlatList
          data={this.state.countries}
          renderItem={({ item }) => (
            
              <View style={list.page}>
                <Text style={list.textName}>{item.name}</Text>
                <Text>{item.capital}</Text>
                <Img countryFlag={item.flag} />
              </View>
            
          )}
          keyExtractor={(item) => item}
        />
      
    );
  }
}

const list = StyleSheet.create({
  page: {
    alignItems: "center",
    flex: 1,
    borderWidth: 0.1,
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
    Height: 20,
    width: 600,
  },

  textName: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  textCapital: {
    fontSize: 20,
    padding: 10,
  },
});

export default List;
