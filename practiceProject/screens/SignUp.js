import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";

const SignUp = () => {
  return (
    <View style={styles.mainview}>
      <View style={styles.topView}>
        <View style={styles.welcomepos}>
          <Text style={styles.welcome}> Create Account</Text>
        </View>
      </View>

      <View style={styles.bottomView}>
        <View style={styles.formView}>
          <TextInput
            placeholder={"first name"}
            placeholderTextColor={"black"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"last name"}
            placeholderTextColor={"black"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"email"}
            placeholderTextColor={"black"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"password"}
            secureTextEntry={true}
            placeholderTextColor={"black"}
            style={styles.textInput}
          />
          <TextInput
            placeholder={"confirm password"}
            secureTextEntry={true}
            placeholderTextColor={"black"}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.loginbutton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomepos: {
    top: 115,
    alignItems: "center",
  },
  welcome: {
    color: "black",
    fontSize: 45,
    fontWeight: "bold",
  },
  topView: {
    width: "100%",
    height: "30%",
    backgroundColor: "#fbf5f3",
  },
  bottomView: {
    width: "100%",
    height: "90%",
    backgroundColor: "#e28413",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 60,
  },
  textInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    height: 52,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    width: "90%",
    color: "black",
    backgroundColor: "#fbf5f3",
    height: 52,
    borderRadius: 10,
    marginTop: 50,
    display: "felx",
    justifyContent: "center",
    alignItems: "center",
  },
  loginbutton: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUp;
