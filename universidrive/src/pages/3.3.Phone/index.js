import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";
import SignUpContext from "../../hooks/SignUpContext";

export default function Phone({ navigation }) {
  const [phone, setPhone] = useState("");
  const { setSignUpData, signUpData } = useContext(SignUpContext);
  const onChangePhone = (value) => {
    setPhone(value);
  };

  const onContinue = () => {
    setSignUpData({ ...signUpData, phone: phone });
    navigation.navigate("Emailandpassword");
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>

        <Text style={styles.text1}>Qual é seu telefone?</Text>

        <Input
          onChangeText={onChangePhone}
          value={phone}
          placeholder="(xx) xxxxx-xxxx"
        />
        <Text style={styles.text2}>
          Vamos utilizar este número para enviar aos seus parceiros de carona a
          fim de que vocês se conectem.
        </Text>
      </View>

      <Button onPress={onContinue} title="Avançar" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },

  wrapperLogin: {
    width: "100%",
  },

  header: {
    alignItems: "center",
  },

  headerText: {
    textTransform: "uppercase",
    fontSize: 21,
    color: "#0077B6",
    fontWeight: "bold",
  },
  text1: {
    padding: 10,
    color: "#4556b7",
    paddingLeft: 5,
    fontSize: 18,
  },
  text2: {
    padding: 10,
    color: "#778899",
    paddingLeft: 5,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
