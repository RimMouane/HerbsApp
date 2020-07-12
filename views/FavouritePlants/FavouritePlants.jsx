import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";
import { getStorageData } from "../../Api/storageData";

const FavouritePlants = () => {
  const [favouritePlants, updateFavouritePlants] = useState([]);

  useEffect(() => {
    getStorageData("@favouritePlants").then((favouritePlants) => {
      updateFavouritePlants(favouritePlants);
    });
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {favouritePlants.map(({ name, id, images }) => {
        return (
          <View key={id}>
            <Text>{name}</Text>
            <Image
              style={styles.images}
              source={{
                uri: images,
              }}
            />
          </View>
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
  images: {
    width: 150,
    height: 150,
  },
});

export default FavouritePlants;
