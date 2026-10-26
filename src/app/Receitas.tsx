
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import { searchRecipes } from "@/api/get-receitas";

interface Receita {
  id: number;
  titulo: string;
  descricao: string;
  imageUrl: string;
}

export default function Receitas() {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery<Receita[]>({
    queryKey: ["recipes"],
    queryFn: searchRecipes,
  });

  if (isLoading) {
    return (
      <View style={styles.mensagem}>
        <Text>Carregando receitas...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.mensagem}>
        <Text>Ops! Erro ao carregar receitas!</Text>
      </View>
    );
  }

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

        {data?.map((receita) => (
          <TouchableOpacity
            key={receita.id}
            style={styles.containerReceita}
            onPress={() =>
              router.push({
                pathname: "/receita/[id]",
                params: { id: receita.id.toString() },
              })
            }>
            <Image
              source={{ uri: receita.imageUrl }}
              style={styles.imagemReceita}
              resizeMode="cover"
            />

            <View style={styles.infoReceita}>
              <Text style={styles.nomeReceita}>
                {receita.titulo}
              </Text>

              <Text style={styles.descricao}>
                {receita.descricao}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {data?.length === 0 && (
          <Text style={styles.descricao}>
            Nenhuma receita encontrada.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  mensagem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
