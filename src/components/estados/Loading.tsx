import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#D4A72C" />

      <Text style={styles.texto}>
        Carregando receitas...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    gap: 12,
  },
  texto: {
    fontSize: 16,
    color: "#333333",
  },
});
