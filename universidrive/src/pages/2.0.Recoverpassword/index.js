import React from "react";
import { View, StyleSheet, Text, Button, KeyboardAvoidingView } from "react-native";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import LogoImage from "../../assets/svg/logo.svg";

export default function Recoverpassword({navigation}){
  return (
    <KeyboardAvoidingView style={styles.container}>
    
      <View style={styles.wrapperLogin}>
        <View style={styles.header}>
          <LogoImage width={300} height={140} />
          <Text style={styles.headerText}>Carona universitária</Text>
        </View>

        <Text style={styles.text1}>
          Informe-nos seu e-mail:
        </Text>

        <Input placeholder="E-mail" />
        <Text style={styles.text2}>
          Vamos enviar um link de redefinição de senha para seu endereço de e-mail.
        </Text>
          
        
      </View>

      <Button 
       onPress={()=> navigation.navigate('Send')}
        title="Enviar"
      />
    
    </KeyboardAvoidingView>
  );
};



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
