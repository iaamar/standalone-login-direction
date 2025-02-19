import React, { memo, useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import { emailValidator } from "../core/utils";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { theme } from "../core/theme";
import Button from "../components/Button";
import { sendEmailWithPassword } from "../api/auth-api";
import Toast from "../components/Toast";

const ForgotPasswordScreen = ({ navigation }) => {
  StatusBar.setHidden(false);
  StatusBar.setBarStyle("light-content");
  StatusBar.setBackgroundColor("rgba(0,0,0,0)");
  StatusBar.setTranslucent(true);

  const [email, setEmail] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ value: "", type: "" });

  const _onSendPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    setLoading(true);

    const response = await sendEmailWithPassword(email.value);

    if (response.error) {
      setToast({ type: "error", value: response.error });
    } else {
      setToast({
        type: "success",
        value: "Email with password has been sent.",
      });
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.background} behavior="padding">
        <BackButton goBack={() => navigation.navigate("LoginScreen")} />

        <Header></Header>

        <TextInput
          label="E-mail address"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <Button
          loading={loading}
          mode="contained"
          onPress={_onSendPressed}
          style={styles.button}
        >
          Send
        </Button>

        {/* <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.label}>← Back to login</Text>
        </TouchableOpacity> */}

        <Toast
          type={toast.type}
          message={toast.value}
          onDismiss={() => setToast({ value: "", type: "" })}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  background: {
    flex: 1,
    maxWidth: 340,
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 200,
  },
});

export default memo(ForgotPasswordScreen);
