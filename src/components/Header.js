import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const HeaderComp = ({}) => {
    var ngayHT = new Date();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
      onPress={()=>{Alert.alert("Thông báo.",'Chức năng này đang được thực hiện!')}}>
        <Icon name="format-align-left" size={25} style={{marginLeft:-25,}}/>
      </TouchableOpacity>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.logo}>
          <Image style={{width:50, height:50}} source={require("../images/logoQLTH.png")} /> 
          <Text style={{fontWeight: 'bold'}}>
    { ngayHT.getDate()+"/"+(ngayHT.getMonth()+1)+"/"+ngayHT.getFullYear()}
          </Text>
        </View>
      </View>
        {/* <Icon name="credit-card" size={25}  style={{marginRight:-50}}/> */}
      <TouchableOpacity
      onPress={()=>{Alert.alert("Thông báo.",'Chức năng này đang được thực hiện!')}}>
        <Icon name="credit-card" size={25}  style={{marginRight:-50}}/>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems:'center',
    flexDirection: 'row',
    marginTop: 0,
    borderBottomWidth:0.5,
    backgroundColor:'#fff',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 10,
    borderWidth:0
  },
});

export default HeaderComp;
