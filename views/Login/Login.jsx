import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Text } from "react-native-elements";
import userLogin from "../../common/helpers/userLogin";

export default function Login({ navigation }) {
  const [state, setState] = useState({
    username: "",
    password: "",
    loading: false,
  });

  const handleUpdate = (name) => (text) => {
    setState({ ...state, [name]: text });
  };

  const login = () => {
    const { username, password } = state;
    setState({ ...state, loading: true });

    setTimeout(() => {
      if (userLogin(username, password)) {
        navigation.navigate("Home");
      }
      return setState({ username: "", password: "", loading: false });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={stylesNatvie.logo}>
        <Text style={styles.h1} h1>
          Your {"\n"}
          HerbApp
        </Text>
      </View>
      <Input
        containerStyle={{
          ...styles.containerStyle,
          paddingBottom: "5%",
        }}
        inputContainerStyle={styles.inputContainerStyle}
        placeholder="Login"
        leftIcon={<Icon name="user" size={18} color="black" />}
        onChangeText={handleUpdate("username")}
        value={state.username}
      />
      <Input
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        placeholder="Hasło"
        leftIcon={<Icon name="lock" size={18} color="black" />}
        onChangeText={handleUpdate("password")}
        value={state.password}
      />
      <Button
        loading={state.loading}
        // onPress={() => navigation.navigate("SearchPlants")}
        onPress={login}
        containerStyle={styles.button}
        title="Zaloguj"
      />
    </View>
  );
}

const stylesNatvie = StyleSheet.create({
  logo: {
    width: "100%",
    marginTop: "20%",
    marginBottom: "20%",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
});

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    // bacgroundColor: "#D7E7D7",
    paddingRight: "10%",
    paddingLeft: "10%",
  },
  containerStyle: {
    paddingRight: "0%",
    paddingLeft: "0%",
  },
  inputContainerStyle: {
    borderRadius: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  h1: {
    textAlign: "center",
    fontFamily: "Open Sans, Fondamento ",
  },
  button: {
    marginTop: "5%",
  },
};
