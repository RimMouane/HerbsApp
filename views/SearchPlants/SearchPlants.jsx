import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import PlantsList from "./PlantsList/PlantsList";
import data from "../../Api/mocks/data";
import search from "../../common/helpers/search";

export default class SearchPlants extends Component {
  state = {
    search: "",
    plants: data || [],
  };

  updateSearch = (text) => {
    this.setState({ search: text, plants: search(data, text) });
  };

  render() {
    const { navigation } = this.props;
    const { search, plants } = this.state;

    return (
      <>
        <SearchBar
          placeholder="Szukaj.."
          onChangeText={this.updateSearch}
          value={search}
        />
        <PlantsList navigation={navigation} plants={plants} />
      </>
    );
  }
}
