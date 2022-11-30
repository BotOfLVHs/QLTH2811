import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
    TextInput,
    Image,
    SafeAreaView,
    Modal,
    ActivityIndicator,
    Animated,
  } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {transform} from '@babel/core';
import {Dimensions} from 'react-native';
import { SearchBar } from 'react-native-screens';
//import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default LoaiHang = function({navigation = useNavigation()}){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getLoaiHang();
      }, []);
      //List MH
      const getLoaiHang = () => {
        axios
          .get(
            'https://opensheet.elk.sh/1CU0JOnN3HZfViWBoOCqurpp537vJ90Gt_MPd9fm-lxg/LoaiHang',
          )
          .then(json => setCategories(json.data));
      };

    return (
        <View style={{height: 100,}}>
            <FlatList 
                horizontal
                data={categories}
                keyExtractor={item => item.MALOAI}
                renderItem={({item}) => {
                    return (
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('MatHangTheoLoai', {MALOAI: item.MALOAI,})
                        }}
                        style={styles.categoryBox}>
                        <Image
                            style={{width: 50,height: 50,resizeMode: 'cover',borderRadius: 10,margin: 10}}
                            source={{uri: item.HINH}}/>
                        <Text style={{color: 'black', fontWeight:'500', fontSize: 13,textAlign:'center'}}>
                            {item.TENLOAI}
                        </Text>
                    </TouchableOpacity>
                    )
                }}
                style={{flex: 0}}>
            </FlatList>
    </View>
    )
}
const styles=StyleSheet.create({
    categoryBox: {
      height: 82,
      width: 82,
      padding: 7,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
      margin: 10,
      elevation: 1,
      borderRadius: 20,
    },


});