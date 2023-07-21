import React from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import Texto from "../../../components/Texto";

type TopoProps = {
  titulo: string;
  imagemTopoUrl: ImageSourcePropType;
};

const width = Dimensions.get("screen").width;

const Topo = ({ titulo, imagemTopoUrl }: TopoProps) => {
  return (
    <>
      <Image source={imagemTopoUrl} style={styles.topo} />
      <Texto estilo={styles.titulo}>{titulo}</Texto>
    </>
  );
};

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});

export default Topo;
