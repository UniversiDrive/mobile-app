import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";
import firebase from "@react-native-firebase/auth";

const Destino = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>
        <Text></Text>
        <Text></Text>
        <Text>Para onde você vai?</Text>
        <Text></Text>
        <Input
          placeholder="Local de partida"
        />
        <Input
          placeholder="Para onde você vai?"
        />
      </View>

      <Button text="Continuar" bgcolor="#0099ff" />
    </View>
  );
};

export default Destino;

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
});
