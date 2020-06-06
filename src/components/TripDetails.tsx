import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./style";
import Colors from "../constants/colors";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";

const TripDetails: React.FC = ({ location }) => {
  return (
    <View style={styles.bottomModal}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Feather name="clock" size={20} color={Colors.red} />
          <Text style={styles.modalHeaderText}>Estimated Duration</Text>
          <Text style={styles.tripDetails}>{location.duration}</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Feather name="map" size={20} color={Colors.red} />
          <Text style={styles.modalHeaderText}>Distance</Text>
          <Text style={styles.tripDetails}>{location.distance}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Feather
              name="map-pin"
              size={12}
              style={styles.icon}
              color={Colors.secondaryColor}
            />
            <Text style={styles.modalHeaderText}>Form</Text>
          </View>

          <Text style={styles.tripDetails}>{location.from}</Text>
        </View>
        <View style={{ marginLeft: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Feather
              name="map-pin"
              size={12}
              style={styles.icon}
              color={Colors.secondaryColor}
            />
            <Text style={styles.modalHeaderText}>To</Text>
          </View>
          <Text style={styles.tripDetails}>{location.to}</Text>
          <View style={{ alignItems: "center" }}>
            <Button mode="outlined" onPress={() => logoutUser()}>
              Logout
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TripDetails;
