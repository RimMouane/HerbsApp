import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import userLogin from "../../common/helpers/userLogin";
import AuthContext from "../../common/contexts/AuthContext.js";
import { setStorageData, getStorageData } from "../../Api/storageData";

export default function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
    loading: false,
    error: false,
  });

  const { signIn } = React.useContext(AuthContext);

  const handleUpdate = (name) => (text) => {
    setState({ ...state, [name]: text });
  };

  const login = () => {
    const { username, password } = state;
    setState({ ...state, loading: true });

    if (userLogin(username, password)) {
      setStorageData("@userLoginIn", true).then(() =>
        signIn(username, password)
      );
    }

    return setState({
      username: "",
      password: "",
      loading: false,
      error: true,
    });
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
        errorMessage={state.error ? "Podaj prawidłowy login" : undefined}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        placeholder="Login"
        leftIcon={<Icon name="user" size={18} color="black" />}
        onChangeText={handleUpdate("username")}
        value={state.username}
      />
      <Input
        errorMessage={state.error ? "Podaj prawidłowe hasło" : undefined}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        placeholder="Hasło"
        leftIcon={<Icon name="lock" size={18} color="black" />}
        onChangeText={handleUpdate("password")}
        value={state.password}
      />
      <Button loading={state.loading} onPress={login} title="Zaloguj" />
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
    paddingRight: "10%",
    paddingLeft: "10%",
  },
  containerStyle: {
    paddingRight: "0%",
    paddingLeft: "0%",
    paddingBottom: "5%",
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
};
