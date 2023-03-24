import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image } from "react-native";
import Title from "./src/components/Title";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import Result from "./src/components/Result";

export default function App() {
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    setResultado(Math.floor(Math.random() * 10));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Title title="Jogo do Nº Aleatório" />
        <Image style={styles.img} source={require("./src/assets/charada.png")} />
        <Result textResult="Pense em nº de 0 a 10" />
        <Button textButton="Descobrir" onPress={calcular} />
        <Result textResult={resultado} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  img: {
    width: "30%",
    height: "30%",
    alignSelf: "center",
    margin: 30
  }
});
