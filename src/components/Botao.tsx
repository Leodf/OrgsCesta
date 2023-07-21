import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "./Texto";

type BotaoProps = {
  name: string;
};

const Botao = ({ name }: BotaoProps) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={() => {}}>
      <Texto estilo={styles.textoBotao}>{name}</Texto>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});

export default Botao;
