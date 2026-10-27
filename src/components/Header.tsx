import { Image, StyleSheet, View } from "react-native";


export default function Header() {
  return (
    <View style={styles.header}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
  )
}

const styles = StyleSheet.create({
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
});