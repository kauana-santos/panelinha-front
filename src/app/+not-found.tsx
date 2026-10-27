
import Header from "@/components/Header";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.conteudo}>
        <View style={styles.tituloContainer}>
          <Text style={styles.codigo}>404</Text>

          <Text style={styles.titulo}>
            Página não encontrada
          </Text>
        </View>

        <Image source={require("@/assets/images/notfound.png")}/>
        <View />

        <View style={styles.rodape}>
          <Text style={styles.descricao}>
            Volte para a página inicial
          </Text>

          <Link href="/" style={styles.link}>
            Início
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 76,
    backgroundColor: "#FAF2B7",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 55,
    height: 55,
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  tituloContainer: {
    alignItems: "center",
    marginTop: 182,
  },
  codigo: {
    fontSize: 21,
    color: "#E65A00",
    fontWeight: "400",
  },
  titulo: {
    fontSize: 22,
    color: "#E65A00",
    textAlign: "center",
  },
  rodape: {
    alignItems: "center",
    marginTop: 20,
  },
  descricao: {
    fontSize: 18,
    color: "#444444",
    textAlign: "center",
    marginBottom: 12,
  },
  link: {
    fontSize: 18,
    color: "#E65A00",
    textDecorationLine: "underline",
  },
});
