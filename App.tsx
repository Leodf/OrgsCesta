import React from "react";
import { SafeAreaView } from "react-native";
import Cesta from "./src/screen/Cesta";
import mock from "./src/mocks/cesta";

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

export default App;
