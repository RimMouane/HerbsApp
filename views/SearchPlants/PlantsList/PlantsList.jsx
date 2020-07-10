import React from "react";
import { StyleSheet, StatusBar, ScrollView, Button } from "react-native";

const PlantsList = ({ plants, navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {plants.map(({ name, id }) => {
        return (
          <Button
            key={id}
            title={name}
            onPress={() => navigation.navigate("Plant", { name: "name" })}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  // item: {
  //   // backgroundColor: "#f9c2ff",
  //   // padding: 20,
  //   width: "100%",
  //   // marginVertical: 8,
  //   // marginHorizontal: 16,
  // },
  title: {
    fontSize: 32,
  },
  scrollView: {
    width: "100%",
    // backgroundColor: "pink",
    // marginHorizontal: 20,
  },
});

export default PlantsList;
