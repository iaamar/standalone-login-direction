import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
const MapBackground = ({ children }) => (
  <View style={styles.background}>{children}</View>
);

export default memo(MapBackground);
const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    display: "flex",
    alignContent: "center",
  },
});
