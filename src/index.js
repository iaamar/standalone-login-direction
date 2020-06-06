import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  App,
} from "./screens";

const Router = createStackNavigator(
  {
    App,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    AuthLoadingScreen,
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none",
  }
);

export default createAppContainer(Router);
