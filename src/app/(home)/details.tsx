import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital ID Card</Text>
      <Image
        source={require("D:\\Academic Files\\3 rd Year\\Sem 02\\COST 32152-Mobile Application Development\\Labs\\Lab03\\StudentHub\\StudentHub\\assets\\images\\user.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Name: Dilantha Sandaruwan</Text>
      <Text style={styles.text}>Student ID: PE/2022/014</Text>
      <Text style={styles.text}>Course: Mobile Application Development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 40,
  },
  text: {
    fontSize: 17,
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
