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
          containerStyle={styles.container}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <PlantsList navigation={navigation} plants={plants} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // borderRadius: "8px",
  },
});
