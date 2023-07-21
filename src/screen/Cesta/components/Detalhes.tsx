import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Texto from "../../../components/Texto";
import Botao from "../../../components/Botao";

type DetalhesProps = {
  nome: string;
  logoFazendaUrl: ImageSourcePropType;
  nomeFazenda: string;
  descricao: string;
  preco: string;
  botao: string;
};

const Detalhes = ({
  nome,
  logoFazendaUrl,
  nomeFazenda,
  descricao,
  preco,
  botao,
}: DetalhesProps) => {
  return (
    <>
      <Texto estilo={styles.nome}>{nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={logoFazendaUrl} style={styles.imagemFazenda} />
        <Texto estilo={styles.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto estilo={styles.descricao}>{descricao}</Texto>
      <Texto estilo={styles.preco}>{preco}</Texto>
      <Botao name={botao} />
    </>
  );
};

const styles = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

export default Detalhes;
