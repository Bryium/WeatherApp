import React from "react";
import { Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/City.jpg")}
        style={styles.imageLayout}
      >
        <Text style={styles.cityName}>London</Text>
        <Text style={styles.countryName}>UK</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  countryName: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default City;
