import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export const autoCompleteStyle = {
  textInputContainer: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    marginLeft: 45,
    marginRight: 45,
    borderRadius: 10,
    height: 48,
    color: Colors.defaultColor,
    fontSize: 16,
    ...Platform.select({
      ios: {
        shadowColor: Colors.defaultColor,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  listView: {
    backgroundColor: Colors.white,
    marginLeft: 45,
    marginRight: 45,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 190,
    borderBottomLeft: 20,
  },
  locationButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};
