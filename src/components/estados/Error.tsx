
import { Image, StyleSheet, Text, View } from "react-native";
import Header from "@/components/Header";

export default function Erro() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.conteudo}>
        <Image
          source={require("@/assets/images/errorpage.png")}
          style={styles.imagem}
          resizeMode="contain"
        />

        <Text style={styles.mensagem}>
          Erro ao carregar receitas
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  conteudo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  mensagem: {
    fontSize: 22,
    color: "#D94F00",
    textAlign: "center",
  },
});
