import { searchRecipe } from "@/api/get-receita";
import Erro from "@/components/estados/Error";
import Loading from "@/components/estados/Loading";
import Header from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import {View, Text, Image, ScrollView, StyleSheet, } from "react-native";
interface Ingrediente {
  id: number;
  titulo: string;
  descricao?: string;
  quantidade: number;
}

interface ModoDePreparo {
  id: number;
  titulo: string;
  descricao: string;
}
interface ReceitaDados {
  id: number;
  titulo: string;
  descricao: string;
  imageUrl: string;
  ingredientes: Ingrediente[] | null;
  modoDePreparo: ModoDePreparo[] | null;
}

export default function Receita() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery<ReceitaDados>({
    queryKey: ["receita", id],
    queryFn: () => searchRecipe(id),
    enabled: !!id,
  });

   if (isLoading) {
     return (
       <Loading/>
     );
   }

  if (isError || !data) {
    return (
      <Erro/>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Header/>

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{data.titulo}</Text>

        <Text style={styles.descricao}>{data.descricao}</Text>

        {data.imageUrl ? (
          <Image
            source={{ uri: data.imageUrl }}
            style={styles.imagem}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.mensagemPreparo}>
            Imagem não disponível.
          </Text>
        )}

        <View style={styles.linha} />

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Ingredientes</Text>

          {data.ingredientes && data.ingredientes.length > 0 ? (
            data.ingredientes.map((ingrediente) => (
              <View key={ingrediente.id} style={styles.item}>
                <Text style={styles.ingrediente}>
                  • {ingrediente.quantidade} {ingrediente.titulo}
                </Text>

                {ingrediente.descricao ? (
                  <Text style={styles.descricaoIngrediente}>
                    {ingrediente.descricao}
                  </Text>
                ) : null}
              </View>
            ))
          ) : (
            <Text style={styles.mensagemPreparo}>
              Os ingredientes ainda não estão disponíveis.
            </Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Modo de preparo</Text>

          {data.modoDePreparo && data.modoDePreparo.length > 0 ? (
            data.modoDePreparo.map((etapa, index) => (
              <View key={etapa.id} style={styles.etapaContainer}>
                <Text style={styles.etapaTitulo}>
                  {index + 1}. {etapa.titulo}
                </Text>

                {etapa.descricao ? (
                  <Text style={styles.etapa}>
                    {etapa.descricao}
                  </Text>
                ) : null}
              </View>
            ))
          ) : (
            <Text style={styles.mensagemPreparo}>
              O modo de preparo ainda não está disponível.
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF4",
  },
  header: {
    height: 70,
    backgroundColor: "#FAF2B7",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 55,
    height: 55,
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#60452A",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: "#555",
    lineHeight: 23,
    marginBottom: 12,
  },
  tempo: {
    fontSize: 14,
    color: "#777",
    marginBottom: 16,
  },
  imagem: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  linha: {
    height: 2,
    backgroundColor: "#E8D98A",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#60452A",
    marginBottom: 16,
  },
  item: {
    marginBottom: 12,
  },
  ingrediente: {
    fontSize: 16,
    color: "#333",
  },
  descricaoIngrediente: {
    fontSize: 13,
    color: "#666",
    marginLeft: 14,
    marginTop: 4,
    lineHeight: 20,
  },
  etapaContainer: {
    marginBottom: 16,
  },
  etapaTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#60452A",
    marginBottom: 6,
  },
  etapa: {
    fontSize: 15,
    color: "#444",
    lineHeight: 23,
  },
  mensagemPreparo: {
    fontSize: 14,
    color: "#777",
    marginBottom: 12,
  },
  mensagemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});