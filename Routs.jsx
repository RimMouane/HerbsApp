import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Layout from "./Layout";
import Home from "./views/Home/Home";
import SearchPlants from "./views/SearchPlants/SearchPlants";
import Plant from "./views/Plant/Plant";

const Stack = createStackNavigator();

const Routs = () => {
  return (
    <Layout>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="SearchPlants"
          component={SearchPlants}
          options={{ title: "SearchPlants" }}
        />
        <Stack.Screen name="Plant" component={Plant} />
      </Stack.Navigator>
    </Layout>
  );
};

export default Routs;
