import React, { memo } from "react";
import MapBackground from "../components/MapBackground";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import App from "./Map";

const Dashboard = () => (
  <MapBackground>
    <App />
  </MapBackground>
);
export default memo(Dashboard);
