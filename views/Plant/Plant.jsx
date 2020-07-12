import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { setStorageData, getStorageData } from "../../Api/storageData";

export default function Plant({ route: { params } }) {
  const { name, images, id } = params;

  const addToFavorite = () => {
    getStorageData("@favouritePlants").then((result) => {
      if (!result?.some((e) => e.name === name)) {
        const newValueFavorite = JSON.stringify([
          ...(result || []),
          { name, id },
        ]);
        setStorageData("@favouritePlants", newValueFavorite);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image
        style={styles.images}
        source={{
          uri: images,
        }}
      />
      <Button
        icon={<Icon name="arrow-right" size={15} color="black" />}
        title="Dodaj do ulubionych"
        type="clear"
        onPress={addToFavorite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  images: {
    width: 150,
    height: 150,
  },
});
