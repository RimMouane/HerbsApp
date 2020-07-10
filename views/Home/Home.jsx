import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Plant({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Wyszukaj zioło"
        onPress={() => navigation.navigate("SearchPlants")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: "100%",
  },
});
