import React from "react";
import { StyleSheet, StatusBar, ScrollView, Button } from "react-native";

const PlantsList = ({ plants, navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {plants.map(({ name, id, images }) => {
        return (
          <Button
            key={id}
            title={name}
            onPress={() => navigation.navigate("Plant", { name, images })}
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

  title: {
    fontSize: 32,
  },
  scrollView: {
    width: "100%",
  },
});

export default PlantsList;
