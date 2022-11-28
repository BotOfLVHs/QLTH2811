
import React, { useState } from "react"; 
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  Button, 
  TouchableOpacity, Dimensions,ImageBackground,StatusBar,
} from "react-native";  
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
  const pxWindow= Dimensions.get('screen');
 
export default RegisterView = function({route, navigation}){
  const [getEmail, setEmail] = useState(""); 
  const [getPassword, setPassword] = useState("");
  var [getPV,setPV]=useState(false);
 
  return ( 
    <ImageBackground style={{width:'100%',height:'100%'}}
    source={require('../../images/bg.jpg')}
    resizeMode='stretch' >
        {StatusBar.setHidden(true,'none')}
        <WebView
            javaScriptCanOpenWindowsAutomatically={true}
            source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSevQ4pxc5JnUAAwJWPr8SCtcxDI4e3zjo6Vg8gig7UhONJhgg/viewform?usp=sf_link' }}
            />

    </ImageBackground>
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
  }, 
 
  image: { 
    marginBottom: 40, 
    width: pxWindow.height*0.1,
    height: pxWindow.height*0.1,
  }, 
 
  inputView: { 
    backgroundColor: "#FFC0CB", 
    borderRadius: 30, 
    width: "70%", 
    height: 45, 
    marginBottom: 10, 
 
    alignItems: "center", 
  }, 
 
  TextInput: { 
    height: 50, 
    flex: 1, 
  }, 
 
  forgot_button: { 
    height: 30, 
    marginBottom: 0, 
  }, 
 
  mk_button: { 
    height: 30, 
    marginTop: -10, 
    fontSize:12,
    color:'blue'
  }, 
 
  loginBtn: { 
    width: "50%", 
    borderRadius: 25, 
    height: 50, 
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 0, 
    backgroundColor: "green", 
  }, 
 
  loginBtngg: { 
    width: "50%", 
    borderRadius: 25, 
    height: 50, 
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 10, 
  }, 
}); 