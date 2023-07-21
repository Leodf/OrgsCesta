import React from "react";
import { StyleSheet, Text } from "react-native";

type TextoProps = {
  children?: string;
  estilo?: any;
};

const Texto = ({ children, estilo }: TextoProps) => {
  let style = styles.texto;
  if (estilo?.fontWeight === "bold") {
    style = styles.textoNegrito;
  }
  return <Text style={[estilo, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  texto: {
    fontFamily: "Montserrat-Regular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "Montserrat-Bold",
    fontWeight: "normal",
  },
});

export default Texto;
