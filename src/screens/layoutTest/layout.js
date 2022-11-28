import React,{Component, useState} from "react";
import {Alert, TouchableOpacity,
   StyleSheet, Text, View, SafeAreaView, Button, Image, StatusBar, TextInput } from 'react-native';
export default LayoutComponent = function(){
  var [getPV,setPV]=useState(true);
    return(
      <SafeAreaView style={{}}>
        
        {StatusBar.setHidden(true, 'none')}
        <View style={{width:'100%', height:'95.5%', borderWidth:2, backgroundColor:"white"}}>
          {/* Hinh anh */}
          {/* <Image 
            style={{width: '100%', height: '100%'}}
            source={{uri: 'https://res.cloudinary.com/hufi/image/upload/v1668756844/KhoaLuan/Bg/background_j0iubh.jpg'}}
          /> */}
          
        <View style={{flexDirection:'row', width:'100%', height:'16.6%', borderWidth:2, borderColor:'red'}}>
          {/* ô1 dãy 1 */}
          <View style={{alignItems:"center", justifyContent:'center', width:'33.3%', height:'100%', borderWidth:2, borderColor:'blue'}}>
            {/* ô bên trong ô1d1 */}
            <View style={{backgroundColor:"red", width:'90%', height:'75%', borderWidth:2, borderColor:'blue', borderRadius:15, justifyContent: 'center'}}>
              <Text>flexDirection:'row'</Text>
              <Text>ô con hàng ngang</Text>
            </View>
          </View>
          {/* ô2 dãy 1 */}
          <View style={{alignItems:'center',width:'33.3%', height:'100%', borderColor:'silver',
          borderLeftWidth:9,
          borderRightWidth:9,
          borderBottomRightRadius:120,
          borderBottomLeftRadius:20,
          borderTopLeftRadius:90,
          borderTopRightRadius:20}}>
            {/* ô bên trong */}
            <Text style={{marginTop:'20%'}}>
              I'm Huong
            </Text>
            <Text style={{marginLeft:'20%'}}>
              =)
            </Text>
          </View>
          {/* ô3 dãy 1 */}
          <View style={{alignItems:'center', justifyContent:'center',width:'33.3%', height:'100%',borderWidth:2, borderColor:'green'}}>
            {/* ô bên trong */}
            <View style={{backgroundColor:"blue", width:'75%', height:'75%', borderWidth:2, borderColor:'blue', borderRadius:15, justifyContent: 'center'}}>
              {/* //////// */}
              <View style={{alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>
                {/* ô bên trong */}
                <View style={{backgroundColor:"pink", width:'96%', height:'96%', borderWidth:2, borderColor:'blue', borderRadius:15, justifyContent: 'center'}}>
                  <View style={{alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>
                    {/* ô bên trong */}
                    <View style={{backgroundColor:"orange", width:'96%', height:'96%', borderWidth:2, borderColor:'blue', borderRadius:15, justifyContent: 'center'}}>
                      <View style={{alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>
                      {/* ô bên trong */}
                      <View style={{backgroundColor:"red", width:'96%', height:'96%', borderWidth:2, borderColor:'blue', borderRadius:15, justifyContent: 'center'}}>
                        <Text style={{fontSize:20}}>@@""
                        </Text>
                        <Text>__,  )
                        </Text>
                      </View>
                    </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          
        </View>
        {/* Row2 */}
        <View style={{flexDirection:'row', width:'100%', height:'16.6%', borderWidth:1, borderColor:'Green'}}>
          <View style={{borderRightWidth:1,width:'67%',height:'100%',alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontWeight:'700', fontSize:20}}>Demo{'\nLVH161'}</Text>
          </View>
          <View style={{flexDirection: 'column',width:'33%',height:'100%',alignItems:'center', justifyContent:'center'}}>
            <View style={{backgroundColor:'#31d45f', width:'100%',height:'50%',alignItems:'center', justifyContent:'center'}}>
            
            </View>
            <View style={{backgroundColor:'blue', width:'100%',height:'50%',alignItems:'center', justifyContent:'center'}}>
            
            </View>
          </View>
        </View>
        {/* row3 */}
        <View style={{flexDirection:'row',width:'100%',height:'16.6%'}}>
          <View style={{width:'33.3%',height:'100%', backgroundColor:'yellow'}}>
          </View>
          <View style={{width:'33.4%',height:'100%', backgroundColor:'#11b2ed'}}>
          </View>
          <View style={{width:'33.3%',height:'100%', backgroundColor:'#74dbda'}}>
          </View>
        </View>
        {/* row 4 */}
        <View style={{justifyContent:'center', alignItems:'center', width:'100%', height:'32.4%',borderWidth:0.5, backgroundColor:'white'}}>
          <View style={{height:'60%', width:'60%', backgroundColor:'#5d2ca4'}}>{/* , alignItems: 'flex-end', justifyContent:'flex-start' */}
            <View style={{width:'50%', aspectRatio:1, backgroundColor:'red', position:'absolute', right:-25, top:-25}}>

            </View>
          </View>
        </View>
        {/* row 5 */}
        <View  style={{flex:1, backgroundColor:'green', justifyContent:'center', alignItems:'center'}}>
          <View style={{flexDirection:'row',width:'80%', height:'25%', justifyContent: 'space-between'}}>
            <TouchableOpacity  style={{borderWidth:3, borderColor:'blue',width:'40%', height:'100%',backgroundColor:'silver', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:20, fontWeight:'800'}}>Lưu</Text>

            </TouchableOpacity>
            <TouchableOpacity  style={{borderWidth:3, borderColor:'brown',width:'40%', height:'100%',backgroundColor:'silver', borderRadius:50, justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:20, fontWeight:'800'}}>CUT</Text> 
            
            </TouchableOpacity>

          </View>
          {/* Test ô nhập */}
          <View style={{borderWidth:0, height:'75%', width:'100%', alignItems:'center', }}>
            <View style={{height:'50%', width:'100%',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
              <Text style={{color:'white', fontSize:20}}>Email</Text>
              <TextInput 
                style={{width:'80%', height:40, borderBottomColor: 'red',borderWidth:1, borderBottomWidth:2, textAlign: 'right'}}
                autoCapitalize='none'
              />
            </View>
            <View style={{height:'50%', width:'100%',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:20,position:'relative'}}>Pass </Text>
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
          </View>
        </View>
        </View>
        <View style={{with:'100%', height:'5%', borderWidth:1, borderColor: 'blue', borderRadius: 0}}>
          <Button
            title="Đăng nhập bằng Google"
            // onPress={() =>{ 
            //   for(i=0;i<=10;i++){
            //     Alert.alert(`Chưa đăng nhập được lần: ${i}`)}
            // }}
            onPress={()=>{Alert.alert("Dang Nhap","Chuc nang dang duoc phat trien!")}}
          />
        </View>
          {console.log('End view layout.')}
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  //Đặt kích thước ô
  //Viền ô
    //Bỏ viền trên, dưới trái phải
    //cong vien
  //Màu ô
  //màu nền
  //chỉnh giữa chiều dọc
  //giữa ngang
  //các con theo chiều dọc
  // -----//ngang
  //cân chỉnh chữ
  
  //chinh chu: 
    //fontSize:, 
    
  //TextInput text thụt vào: padding