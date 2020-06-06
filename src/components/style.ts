import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    marginHorizontal: 10,
    paddingVertical: 10,
    height: 300,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  modalHeaderText: {
    fontWeight: "bold",
    fontSize: 14,
    color: Colors.secondaryColor,
  },
  tripDetails: {
    color: Colors.defaultColor,
    fontSize: 12,
    fontWeight: "bold",
  },
});
