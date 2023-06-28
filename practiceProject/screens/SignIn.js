import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignIn = ({ navigation }) => {
  function navigate() {
    navigation.navigate("signUp");
  }
  return (
    <View style={styles.mainview}>
      <View style={styles.topView}>
        <View style={styles.welcomepos}>
          <Text style={styles.welcome}> Welcome</Text>
        </View>

        <View style={styles.sloganpos}>
          <Text style={styles.slogan}> Optimize your Playing Experience</Text>
        </View>
      </View>

      <View style={styles.bottomView}>
        <View style={styles.formView}>
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.loginbutton}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Text style={styles.loginbutton1}>Sign Up</Text>
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
    top: 80,
    alignItems: "center",
  },
  sloganpos: {
    top: 80,
    alignItems: "center",
  },
  slogan: {
    color: "black",
    fontSize: 20,
  },
  welcome: {
    color: "black",
    fontSize: 45,
    fontWeight: "bold",
  },
  topView: {
    width: "100%",
    height: "40%",
    backgroundColor: "#f2f7f2",
  },
  bottomView: {
    width: "100%",
    height: "70%",
    backgroundColor: "#8e5572",
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
  button:{
    width:'90%',
    color:'black',
    backgroundColor:'#f2f7f2',
    height:52,
    borderRadius:10,
    marginTop:50,
    display:'felx',
    justifyContent:'center',
    alignItems:'center'
  },
  loginbutton:{
    fontSize:18,
    fontWeight:'bold'
  },
  button1:{
    width:'90%',
    color:'black',
    backgroundColor:'#f2f7f2',
    height:52,
    borderRadius:10,
    marginTop:20,
    display:'felx',
    justifyContent:'center',
    alignItems:'center'
  },
  loginbutton1:{
    fontSize:18,
    fontWeight:'bold'
  }
});

export default SignIn;
