import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('@/assets/images/banner.png')} style={styles.img}/>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Panelinha</Text>
        <Text style={styles.description}>Receitas para tornar o seu dia a dia mais simples</Text>
      </View>

      <Link href="/Receitas" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg: {
    height: 600,
    width: "100%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  botao: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#F8B28C",
    marginHorizontal: 20,
    marginVertical: 25,
    borderRadius: 10
  },
  btnText: {
    fontSize: 16,
    color: "#302f2f"
  },
  title:{
    color: "#B3404A",
    fontSize: 30,
    fontWeight: "bold"
  },
  description:{
    fontSize: 16
  },
  titleContainer:{
    marginHorizontal: 10,
    marginVertical: 15
  }
});