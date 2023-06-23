import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Welcome!</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.loginbutton}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
          <Text style={styles.loginbutton1}>Sign Up</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#189AB4",
    alignItems: "center",
    justifyContent: "center",
  },

  welcomeContainer: {
    top: -250,
  },

  title: {
    fontSize: 50,
    color: "white",
  },
  button: {
    fontSize: 35,
    color: "white",
    top: 430,
    alignItems: "center",
  },
  loginbutton: {
    fontSize: 29,
    color: "white",
    borderWidth: 1,
    borderColor: '#ffafcc',
    borderRadius: 10,
    paddingVertical: 5, 
    paddingHorizontal: 60,
  },
  button1: {
    fontSize: 32,
    color: "white",
    top: 450,
    alignItems: "center",
  },
  loginbutton1: {
    fontSize: 27,
    color: "white",
    borderWidth: 1,
    borderColor: '#ffafcc',
    borderRadius: 10,
    paddingVertical: 5, 
    paddingHorizontal: 55,
  },
});
