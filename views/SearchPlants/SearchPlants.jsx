import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import PlantsList from "./PlantsList/PlantsList";
import postData from "../../Api/request";

export default class SearchPlants extends Component {
  state = {
    search: "",
    data: [],
  };

  updateSearch = (search) => {
    this.setState({ search });
    postData(
      `https://trefle.io/api/plants?q=${search}&token=dnBPUW92TXhqb2ZoUXJxbDBYL3J0Zz09`,
      //   "http://trefle.io/api/plants/186462/?token=dnBPUW92TXhqb2ZoUXJxbDBYL3J0Zz09",
      { answer: 42 }
    ).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
      this.setState({ data });
    });
  };

  render() {
    const { search, data } = this.state;

    return (
      <>
        <SearchBar
          containerStyle={styles.container}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <PlantsList data={data} />
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
