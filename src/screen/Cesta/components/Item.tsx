import React from "react";
import Texto from "../../../components/Texto";
import { Image, ImageProps, StyleSheet, View } from "react-native";

type ItemProps = {
  item: {
    nome: string;
    imagem: ImageProps;
  };
};

const Item = ({ item: { nome, imagem } }: ItemProps) => {
  return (
    <View key={nome} style={styles.item}>
      <Image source={imagem} style={styles.imagem} />
      <Texto estilo={styles.nome}>{nome}</Texto>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#466464",
  },
});

export default Item;
