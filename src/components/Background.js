import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const Background = ({ children }) => (
  <ImageBackground style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="position">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    display: "flex",
    // width: "100%",
    backgroundColor: "#FFFFFF",
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    // flex: 1,
    // padding: 20,
    // width: "100%",
    // maxWidth: 340,
    // alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
  },
});

export default memo(Background);
