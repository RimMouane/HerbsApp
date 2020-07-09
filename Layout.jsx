import React from "react";
import { StyleSheet, View } from "react-native";
import SearchPlants from "./views/SearchPlants/SearchPlants.jsx";

export default function Layout() {
  return (
    <View style={styles.container}>
      <SearchPlants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    width: "100%",
  },
});
