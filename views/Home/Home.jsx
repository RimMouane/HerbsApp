import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { setStorageData } from "../../Api/storageData";
import AuthContext from "../../common/contexts/AuthContext.js";

export default function Plant({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Wyszukaj zioło"
          onPress={() => navigation.navigate("SearchPlants")}
        />
        <Button
          title="Ulubione zioła"
          onPress={() => navigation.navigate("FavouritePlants")}
        />
        <Button
          disabled
          title="Rozpoznaj zioło"
          onPress={() => navigation.navigate("in progress")}
        />
      </View>
      <Button
        type="outline"
        title="Wyloguj"
        onPress={() => {
          setStorageData("@userLoginIn", false).then(() => {
            signOut();
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});
