import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import IconText from "../components/IconText";

const City = () => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    imageLayout,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        // eslint-disable-next-line no-undef
        source={require("../../assets/City.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>

        <View style={[populationWrapper, styles.rowLayout]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText="8000"
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyText="10:46:58 AM"
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            bodyText="17:28:15 PM"
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
    marginTop: -34,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
