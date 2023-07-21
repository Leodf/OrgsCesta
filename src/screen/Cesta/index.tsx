import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import cesta from "../../mocks/cesta";
import Texto from "../../components/Texto";

type CestaProps = typeof cesta;

const Cesta = ({ topo, detalhes, itens }: CestaProps) => {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={styles.cesta}>
                <Detalhes {...detalhes} />
                <Texto estilo={styles.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    fontSize: 20,
    lineHeight: 32,
  },
});

export default Cesta;
