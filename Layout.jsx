import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

export default function Layout({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.view}>{children}</View> */}
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  view: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    width: "100%",
  },
});
