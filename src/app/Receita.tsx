import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Receita() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🍲</Text>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>
          Manjar de coco com frutas vermelhas
        </Text>

        <Text style={styles.tempo}>
          Tempo de preparo 60 minutos
        </Text>

        <Image
          style={styles.imagem}
          resizeMode="cover"
        />

        <View style={styles.linha} />

        <View style={styles.cardIngredientes}>
          <Text style={styles.subtitulo}>
            Ingredientes da calda
          </Text>

          <ScrollView
            style={styles.listaIngredientes}
            nestedScrollEnabled
            showsVerticalScrollIndicator
          >
            <Text style={styles.ingrediente}>
              300 gramas de frutas vermelhas variadas
            </Text>

            <Text style={styles.ingrediente}>
              1/2 xícara de chá de açúcar refinado (100 gramas)
            </Text>

            <Text style={styles.ingrediente}>
              Suco de 1 limão (15 ml)
            </Text>

            <Text style={styles.ingrediente}>
              Raspas de 1 limão
            </Text>

            <Text style={styles.subtitulo}>
              Ingredientes da calda
            </Text>

            <Text style={styles.ingrediente}>
              300 gramas de frutas vermelhas variadas
            </Text>

            <Text style={styles.ingrediente}>
              1/2 xícara de chá de açúcar refinado (100 gramas)
            </Text>

            <Text style={styles.ingrediente}>
              Suco de 1 limão (15 ml)
            </Text>

            <Text style={styles.ingrediente}>
              Raspas de 1 limão
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  logoContainer: {
    height: 76,
    backgroundColor: "#FFF5B5",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 36,
  },

  conteudo: {
    paddingHorizontal: 12,
    paddingTop: 65,
  },

  titulo: {
    color: "#E85B16",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
  },

  tempo: {
    color: "#666666",
    fontSize: 12,
    textAlign: "center",
    marginTop: 6,
    marginBottom: 32,
  },

  imagem: {
    width: "82%",
    height: 217,
    alignSelf: "center",
  },

  linha: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginTop: 13,
    marginBottom: 28,
    marginHorizontal: 27,
  },

  cardIngredientes: {
    backgroundColor: "#FAF8F8",
    borderRadius: 12,
    padding: 16,
    minHeight: 380,
  },

  subtitulo: {
    fontSize: 15,
    color: "#222222",
    marginBottom: 14,
  },

  listaIngredientes: {
    maxHeight: 300,
  },

  ingrediente: {
    fontSize: 11,
    color: "#222222",
    marginBottom: 12,
    marginLeft: 14,
  },
});