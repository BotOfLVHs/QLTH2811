
import React, { useState } from "react"; 
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  Button, 
  TouchableOpacity, Dimensions,ImageBackground,StatusBar, Alert,
} from "react-native";  
import { NavigationContainer } from '@react-navigation/native';
  const pxWindow= Dimensions.get('screen');
 
export default LoginView = function({route, navigation}){
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  var [getPV,setPV]=useState(false);
  
  const [checkValidEmail, setCheckValidEmail] = useState(false); 
  const [checkValidPass, setCheckValidPass] = useState(false); 
  const [validPass, setValidPass] = useState(''); 
  //const validPass='Mật khẩu không được chứa khoảng trắng.\nMật khẩu phải có ít nhất một ký tự chữ hoa.\nMật khẩu phải có ít nhất một ký tự chữ thường.\nMật khẩu phải chứa ít nhất một chữ số.\nMật khẩu phải dài 8-16 ký tự.\nMật khẩu phải chứa ít nhất một Biểu tượng Đặc biệt.';

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handleCheckPass = text => {
    /**
      Password must not contain Whitespaces.
      Password must have at least one Uppercase Character.
      Password must have at least one Lowercase Character.
      Password must contain at least one Digit.
      Password must be 8-16 Characters Long.
      Password must contain at least one Special Symbol.

      Mật khẩu không được chứa khoảng trắng.
      Mật khẩu phải có ít nhất một ký tự chữ hoa.
      Mật khẩu phải có ít nhất một ký tự chữ thường.
      Mật khẩu phải chứa ít nhất một chữ số.
      Mật khẩu phải dài 8-16 ký tự.
      Mật khẩu phải chứa ít nhất một Biểu tượng Đặc biệt.
     */
    const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isValidLength = /^.{8,16}$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    var err='';
    if (!isNonWhiteSpace.test(text)) {
      err+='Mật khẩu không được chứa khoảng trắng.\n';
      setValidPass(err);
      setCheckValidPass(true);
    }

    if (!isContainsUppercase.test(text)) {
      err+='Mật khẩu phải có ít nhất một ký tự chữ hoa.\n';
      setValidPass(err);
      setCheckValidPass(true);
    }

    if (!isContainsLowercase.test(text)) {
      err+='Mật khẩu phải có ít nhất một ký tự chữ thường.\n';
      setValidPass(err);
      setCheckValidPass(true);
    }

    if (!isContainsNumber.test(text)) {
      err+='Mật khẩu phải chứa ít nhất một chữ số.\n';
      setValidPass(err);
      setCheckValidPass(true);
    }

    if (!isContainsSymbol.test(text)) {
      err+='Mật khẩu phải chứa ít nhất một biểu tượng đặc biệt.\n';
      setValidPass(err);
     setCheckValidPass(true);
    }
    if (!isValidLength.test(text)) {
      err+='Mật khẩu phải dài 8-16 ký tự.\n';
      //Alert.alert('hi');
      setValidPass(err);
      setCheckValidPass(true);
    }
    if(isNonWhiteSpace.test(text)&&isContainsUppercase.test(text)&&isContainsLowercase.test(text)&&isContainsNumber.test(text)&&isContainsSymbol.test(text)&&isValidLength.test(text))
      setCheckValidPass(false);
  };

 
  return ( 
    <ImageBackground style={{width:'100%',height:'100%'}}
    source={require('../../images/bg.jpg')}
    resizeMode='stretch' >
        {StatusBar.setHidden(true,'none')}
      <View style={styles.container}> 
        <Image style={styles.image} source={require("../../images/logoQLTH.png")} /> 
  
        <View style={styles.inputView}> 
          <TextInput 
            style={styles.TextInput} 
            placeholder="Nhập vào email của bạn..." 
            placeholderTextColor="#003f5c" 
            onChangeText={(text)=>handleCheckEmail(text)} 
            textAlign="right"
            
          /> 
          {checkValidEmail ? (
            <TouchableOpacity style={styles.textFailed}
            onPress={()=>{Alert.alert('Thông báo lỗi','Email phải có định dạng: abc@d.e');}}>
              <Image style={{width:20, height:20, borderWidth:0}} source={require('../../images/error.png')}
              resizeMode='contain'/></TouchableOpacity>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
        </View> 
  
        <View style={styles.inputView}> 
          <TextInput 
            style={styles.TextInput} 
            placeholder="Nhập vào mật khẩu..." 
            placeholderTextColor="#003f5c"
            secureTextEntry={getPV?false:true}
            onChangeText={(text)=>handleCheckPass(text)} 
            textAlign="right"
          /> 
          {checkValidPass ? (
            <TouchableOpacity style={styles.textFailed}
            onPress={()=>{Alert.alert('Thông báo lỗi',validPass);}}>
              <Image style={{width:20, height:20, borderWidth:0}} source={require('../../images/error.png')}
              resizeMode='contain'/></TouchableOpacity>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
        </View> 
        <TouchableOpacity 
        onPress={()=>{setPV(!getPV);console.log(getPV?'Ẩn pass':'Hiện pass')}}>
          {getPV?
          <Text style={styles.mk_button}>Ẳn mật khẩu??
          <Image style={{width:15, height:15}} source={require('../../images/hide.png')}
          resizeMode='contain'/></Text>
           :
          <Text style={styles.mk_button}>Hiện mật khẩu?
          <Image style={{width:15, height:15}} source={require('../../images/show.png')}
          resizeMode='contain'/></Text> 
          }
        </TouchableOpacity> 
  
        <TouchableOpacity> 
          <Text style={styles.forgot_button}>Quên mật khẩu?</Text> 
        </TouchableOpacity> 
  
        <TouchableOpacity style={styles.loginBtn}
          onPress={()=>{navigation.navigate('HomeScreen',{email: (email+password)})
        }}> 
          <Text style={{fontWeight:'800', color:'red'}}>ĐĂNG NHẬP</Text> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.loginBtngg}> 
          <Image style={{width: '100%',height: pxWindow.height*0.05,}} source={require("../../images/google_logo.png")} /> 
        </TouchableOpacity> 
      </View> 

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
    flexDirection:'row',
  }, 
 
  TextInput: { 
    height: '100%', 
    width:'90%',
    textAlign:'center',
    fontSize:17,
    borderWidth:0,
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
  }, 
  textFailed: {
    width:"10%",
    height:"100%",
    alignSelf: 'flex-end',
    color: 'red',
    justifyContent:'center',
    borderWidth:0,
  },
}); 