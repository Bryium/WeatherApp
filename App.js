import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState();
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
