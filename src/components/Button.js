import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";

const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === "outlined" && { backgroundColor: theme.colors.surface },
      style,
    ]}
    labelStyle={[
      styles.text,
      mode === "contained" && { color: theme.colors.surface },
    ]}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    // lineHeight: 26,
  },
});

export default memo(Button);
