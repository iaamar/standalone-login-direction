import React, { memo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import * as firebase from "firebase";
import "firebase/auth";
import { firebaseConfig } from "../core/config";
import LoginScreen from "./LoginScreen";

firebase.initializeApp(firebaseConfig);

const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      navigation.navigate("Dashboard");
    } else {
      navigation.navigate("LoginScreen");
    }
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6c63ff" />
    </View>
  );
};

export default memo(AuthLoadingScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    flexDirection: "column",
  },
});
