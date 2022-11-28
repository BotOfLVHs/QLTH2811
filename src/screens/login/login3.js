import React from "react";
import { View, Text, SafeAreaView, StatusBar,
TouchableOpacity,
ImageBackground, 
Image,
Dimensions,
Alert, Linking, Share
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';


const pxWindow= Dimensions.get('window');
var ngayHT = new Date();
export default Login3 = function({navigation}){
    const handleDK = () => {
        axios
          .get(
            'https://opensheet.elk.sh/18DC9_ueJpwJ4z2RlabW0a3DdOo_9_UPtSZMaArq8RdI/DieuKhoan',
          )
          .then(response => {
            var count = Object.keys(response.data).length;
            let DKArray = [];
            for (var i = 0; i < count; i++) {
              LoaiArray.push({
                value: response.data[i].STT,
                label: response.data[i].DK,
              });
            }
            setMaLoaiData(DKArray);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    return(
        <ImageBackground style={{width:'100%',height:'100%'}}
        source={require('../../images/shopback2.jpg')}
        resizeMode='stretch' >
            {StatusBar.setHidden(true,'none')}
            <SafeAreaView style={{flex:1,width:'100%',height:'100%',justifyContent:'center', alignItems:'center'}}>
                
                <View style={{borderTopLeftRadius:0, borderBottomLeftRadius:0, opacity:0.7,  width:'70%',height:'60%',backgroundColor:'white',justifyContent:'flex-start', alignItems:'center'}}>
                    {/* Phan tren logo */}
                    <View style={{borderWidth:0, flexDirection:'row', height: '30%', width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <View style={{borderWidth:0, height: '100%', width:'10%',justifyContent:'flex-start', alignItems:'center'}}>
                            <TouchableOpacity style={{marginTop:'10%',opacity:1,width:'90%', aspectRatio:1,}}
                                onPress={()=>{Alert.alert("Gợi ý","Bạn đang ở trang giới thiệu 3.\nBạn hãy đọc điều khoản sử dụng trước khi dùng nhé!.");  navigation.openDrawer()}}>
                                <Image style={{opacity:1, height:'100%', width:'100%'}} source={require('../../images/question.gif')}/>                                    
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:0, height: '100%', width:'80%',justifyContent:'center', alignItems:'center'}}>
                            <Image style={{opacity:1, height:'100%', aspectRatio:1}} source={require('../../images/logoQLTH.png')}/>
                        </View>
                        <View style={{borderWidth:0, borderColor:'red', height: '100%', width:'10%',justifyContent:'flex-start', alignItems:'center'}}>
                            <TouchableOpacity style={{marginTop:'10%',opacity:1,width:'90%', aspectRatio:1,}}>
                                <Image style={{opacity:1, height:'100%', width:'100%'}} source={require('../../images/setting.gif')}/>                                    
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:'100%', flex:1, borderWidth:0, justifyContent: 'flex-start', alignItems: 'center'}}>
                        {/* Dong chu */}
                        <View style={{borderWidth:0, height: '30%', width:'80%',justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize: 16, fontWeight: '800', color:'blue', fontStyle:'italic', fontFamily:'Cochin',textAlign: 'center',fontWeight: 'bold'}}>
                                Bằng cách tiếp tục đồng nghĩa bạn đã đồng ý với tất cả {" "}
                                <Text style={{fontSize: 16, fontWeight: '800', color:'black', fontStyle:'normal', fontFamily:'Cochin',textAlign: 'center',fontWeight: 'bold'}}
                                onPress={()=>{
                                    var dk=''
                                    for(var i in DKArray){
                                        dk+=DKArray[i]
                                    }
                                    console.log(dk);
                                }}>
                                    "Điều khoản sử dụng" {" "}
                                </Text>
                                của chúng tôi.
                            </Text>
                        </View>
                        {/* next */}
                        {/* <View style={{width:50, aspectRatio:1, borderWidth:1}}> */}
                            <View style={{flexDirection:'row', borderWidth:0, height:'20%', width:'60%', justifyContent:'space-between'}}>
                                <TouchableOpacity style={{opacity:1,width:50, aspectRatio:1,}}
                                    onPress={()=>{navigation.navigate('Getstarted2')}}>
                                    <Image style={{opacity:1, height:'100%', width:'100%'}} source={require('../../images/prev.png')}/>                                    
                                </TouchableOpacity>
                                <TouchableOpacity style={{opacity:1,width:50, aspectRatio:1}}
                                    onPress={()=>{navigation.navigate('Getstarted4')}}>
                                    <Image style={{opacity:1, height:'100%', width:'100%'}} source={require('../../images/next.png')}/>                                    
                                </TouchableOpacity>

                            </View>
                        {/* </View> */}
                        {/* help */}
                        <View style={{width:'50%', flex:1, borderWidth:0, justifyContent:'flex-end', alignItems:'center'}}>
                            <Text style={{opacity: 0.9, fontSize: 12, fontWeight: '800', color:'black', fontStyle:'normal', fontFamily:'', borderBottomColor:'black', borderBottomWidth:1}}
                            onPress={()=>{Alert.alert("Liên hệ","Hotline: 0352549252\nEmail: huong32188@gmail.com")}}
                            >Bạn cần giúp đỡ?</Text>
                            <Text style={{opacity: 0.9, fontSize: 12, fontWeight: '800', color:'black', fontStyle:'normal', fontFamily:'', borderBottomColor:'black', borderBottomWidth:1}}
                            onPress={()=>{
                                Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLScTWbqHYh9pfQtX6KX0GwZd23n_CSvBgcWg1LZjyGTigzAWNw/viewform?usp=sf_link');}}
                            >Góp ý?</Text>
                        </View>

                    </View>
                </View>
            </SafeAreaView>
            {/* {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds())} */}
            {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds()+' End Login Screen.')}
        </ImageBackground>
    )
}
//Bai4
/**
 * 1. Component ImageBackground
 * 2. resizeMode='stretch' trong ImageBackground
 * 3. 
 */