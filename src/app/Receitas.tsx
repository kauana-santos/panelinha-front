
import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Receitas() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.containerTitulo}>
          <Text style={styles.texto}>Receitas</Text>
        </View>
          <TouchableOpacity style={styles.containerReceita}>
            <Image
              source={{
                uri: "https://static.itdg.com.br/images/640-400/d290bc79bcad112ee9095604e45eb262/365326-original.jpg",
              }}
              style={styles.imagemReceita}
              resizeMode="cover"
            />
            <View style={styles.infoReceita}>
              <Text style={styles.nomeReceita}>
                Manjar de coco com frutas vermelhas
              </Text>
              <Text style={styles.descricao}>
                Esse manjar de coco ganha um contraste especial com a calda de
                frutas vermelhas.
              </Text>
            </View>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    height: 70,
    width: "100%",
    backgroundColor: "#FAF2B7",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 55,
    height: 55,
  },

  conteudo: {
    padding: 15,
  },

  containerTitulo: {
    marginVertical: 10,
  },

  texto: {
    fontSize: 23,
    color: "#333333",
  },

  containerReceita: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    gap: 12,
    marginBottom: 15,
  },

  imagemReceita: {
    width: "44%",
    height: 140,
    borderRadius: 5,
  },

  infoReceita: {
    flex: 1,
    justifyContent: "center",
    gap: 8,
  },

  nomeReceita: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222222",
    lineHeight: 23,
  },

  descricao: {
    fontSize: 14,
    color: "#333333",
    lineHeight: 20,
  },
});