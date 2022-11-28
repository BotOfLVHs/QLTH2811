import React,{Component, useState} from "react";
import { View, Text, TextInput, SafeAreaView, StatusBar,
TouchableOpacity,
ImageBackground, 
Image,
Dimensions,
Alert, Linking, Share
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';


const pxWindow= Dimensions.get('screen');
var ngayHT = new Date();
export default Login5 = function({navigation}){
  var [getPV,setPV]=useState(false);
    return(
        <ImageBackground style={{width:'100%',height:'100%'}}
        source={require('../../images/shopback2.jpg')}
        resizeMode='stretch' >
            {StatusBar.setHidden(true,'none')}
            <SafeAreaView style={{flex:1,width:'100%',height:'100%',justifyContent:'center', alignItems:'center'}}>
                
                <View style={{borderRadius:5, opacity:0.7,  width:'70%',height:'60%',backgroundColor:'white',justifyContent:'flex-start', alignItems:'center'}}>
                    {/* Phan tren logo */}
                    <View style={{borderWidth:0, flexDirection:'row', height: pxWindow.height*0.07, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <View style={{borderWidth:0, height: '100%', width:'10%',justifyContent:'flex-start', alignItems:'center'}}>
                            <TouchableOpacity style={{marginTop:'10%',opacity:1,width:'90%', aspectRatio:1,}}
                                onPress={()=>{Alert.alert("Gợi ý","Bạn đang ở trang đăng nhập.\nBạn có thể đăng nhập bằng TK&MK hoặc đăng nhập bằng Google.")}}>
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
                    <View style={{borderWidth:1,width:'100%', flex:1,  justifyContent: 'center', alignItems: 'center'}}>
                        {/* dien thong tin */}
                        <View style={{borderWidth:1, height: '80%', width:'80%',justifyContent:'center', alignItems:'center'}}>
                                <View style={{borderWidth:1,flexDirection:'row',width:'80%', height:33, justifyContent: 'center', alignItems:'center'}}>
                                    <Text style={{color:'blue', fontSize:12, fontWeight:'800'}}>Email:</Text>
                                    <TextInput 
                                                style={{backgroundColor: 'silver',borderRadius:25, fontSize:12, width:'80%', height:'100%', borderBottomColor: 'red',borderWidth:1, borderBottomWidth:2, textAlign: 'right'}}
                                                // autoCapitalize='none'
                                            />

                                </View>
                                <View style={{width:'10%', height:pxWindow.height*0.01}}></View>
                                <View style={{flexDirection:'row',width:'80%', height:33, justifyContent: 'center', alignItems:'center', }}>
                                    <Text style={{color:'blue', fontSize:12, fontWeight:'800'}}>{'    '}MK:</Text>
                                    <TextInput 
                                            style={{backgroundColor: 'silver',borderRadius:25, fontSize:12, paddingRight:30, width:'80%', height:'100%', borderBottomColor: 'red',borderWidth:1, borderBottomWidth:2, textAlign: 'right'}}
                                            autoCapitalize='none'
                                            secureTextEntry={getPV?false:true}
                                        />
                                        <TouchableOpacity style={{width:30, height:'100%', aspectRatio:1, position:'absolute', right:0, justifyContent:'center'}}
                                            onPress={()=>{setPV(!getPV);console.log(getPV?'Ẩn pass':'Hiện pass')}}>
                                            {getPV?
                                            <Image style={{width:'70%', height:'70%'}} source={require('../../images/hide.png')}
                                            resizeMode='contain'/>:
                                            <Image style={{width:'70%', height:'70%'}} source={require('../../images/show.png')}
                                            resizeMode='contain'/>
                                            }
                                        </TouchableOpacity>

                                </View>
                                <View style={{width:'10%', height:pxWindow.height*0.01}}></View>
                                <View style={{width:'50%', width:pxWindow.height*0.1,  height:pxWindow.height*0.04, alignItems:'center'}}>
                                    <TouchableOpacity  style={{borderWidth:3, borderColor:'blue',width:'100%', width:pxWindow.width*0.2,backgroundColor:'silver', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{fontSize:15, fontWeight:'800', color:'green'}}>Đăng nhập</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity  style={{borderWidth:1, borderColor:'blue',width:'100%', width:pxWindow.width*0.2,backgroundColor:'silver', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                                        
                                            <Image style={{width:'70%', height:'70%'}} source={require('../../images/show.png')}
                                            resizeMode='contain'/>

                                    </TouchableOpacity>

                                </View>

                            {/* <View style={{borderWidth:0, height:'75%', width:'100%', alignItems:'center', }}>
                                <View style={{height:'50%', width:'100%',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                                    <Text style={{color:'blue', fontSize:20}}>Email:</Text>
                                    <TextInput 
                                        style={{width:'80%', height:40, borderBottomColor: 'red',borderWidth:1, borderBottomWidth:2, textAlign: 'right'}}
                                        autoCapitalize='none'
                                    />
                                </View>
                                <View style={{height:'50%', width:'100%',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                                    <Text style={{color:'blue', fontSize:20,position:'relative'}}>MK:{'    '}</Text>
                                    <TextInput 
                                        style={{paddingRight:30,width:'80%', height:40, borderBottomColor: 'red',borderWidth:1, borderBottomWidth:2, textAlign: 'right'}}
                                        autoCapitalize='none'
                                        secureTextEntry={getPV?false:true}
                                    />
                                    <TouchableOpacity style={{width:30, height:'100%', aspectRatio:1, position:'absolute', right:0}}
                                        onPress={()=>{setPV(!getPV);console.log(getPV?'Ẩn pass':'Hiện pass')}}>
                                        {getPV?
                                        <Image style={{width:'100%', height:'100%'}} source={require('../../images/next.png')}
                                        resizeMode='contain'/>:
                                        <Image style={{width:'100%', height:'100%'}} source={require('../../images/prev.png')}
                                        resizeMode='contain'/>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View> */}
                        </View>
                        {/* next */}
                        {/* <View style={{ borderWidth:0, height:'20%', width:'60%', justifyContent:'center', alignItems:'center'}}>                                
                            <TouchableOpacity style={{opacity:1,width:50, aspectRatio:1}}
                            onPress={()=>{navigation.navigate('Getstarted3')}}>
                                <Image style={{opacity:1, height:'100%', width:'100%'}} source={require('../../images/prev.png')}/>                                    
                            </TouchableOpacity>
                        </View> */}
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