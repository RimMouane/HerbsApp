import React, { useMemo, useEffect, useReducer } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Layout from "./Layout";
import Home from "./views/Home/Home";
import SearchPlants from "./views/SearchPlants/SearchPlants";
import Plant from "./views/Plant/Plant";
import Login from "./views/Login/Login";
import FavouritePlants from "./views/FavouritePlants/FavouritePlants";
import AuthContext from "./common/contexts/AuthContext.js";
import { getStorageData } from "./Api/storageData";

const Stack = createStackNavigator();

const authScreens = {
  Login,
};

const userScreens = {
  Home,
  SearchPlants,
  Plant,
  FavouritePlants,
};

const Routs = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            isLoggedIn: action.isLoggedIn,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            isLoggedIn: action.isLoggedIn,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            isLoggedIn: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      isLoggedIn: false,
    }
  );

  useEffect(() => {
    getStorageData("@userLoginIn").then((isLoggedIn) => {
      dispatch({ type: "RESTORE_TOKEN", isLoggedIn: isLoggedIn });
    });
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", isLoggedIn: true });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      favouritePlants: state.favourite,
    }),
    []
  );

  if (state.isLoading) {
    return <Text>..is loading</Text>;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Layout>
        <Stack.Navigator>
          {Object.entries({
            ...(state.isLoggedIn ? userScreens : authScreens),
          }).map(([name, component]) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </Layout>
    </AuthContext.Provider>
  );
};

export default Routs;
