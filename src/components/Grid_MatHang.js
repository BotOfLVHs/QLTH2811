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

export default GridMatHang = function({navigation}){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getLoaiHang();
      }, []);
      //List MH
      const getLoaiHang = () => {
        axios
          .get(
            'https://opensheet.elk.sh/1CU0JOnN3HZfViWBoOCqurpp537vJ90Gt_MPd9fm-lxg/MatHang',
          )
          .then(json => setCategories(json.data));
      };
    const renderItem = ({item, index}) => {
        return (
        <View style={styles.items}>
            <View style={styles.productCard}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('productCheckout')}>
                        <View>
                            <Image
                                style={styles.image}
                                source={{uri: item.HINHANH}}
                            />
                        </View>
                        <View>
                            <Text style={{fontSize: 16, paddingLeft: 8}}>{item.TENMH}</Text>
                        </View>
                </TouchableOpacity>
            </View>
            
        </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList 
                numColumns={2}
                data={categories}
                keyExtractor={item => item.MAMH}
                renderItem={renderItem}
                style={styles.container}>
            </FlatList>
    </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex:1,
    },

    items: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 5,
    },

    image: {
        width: 100,
        height: 100,
        
    },

    productCard: {
        height: 200,
        width: 190,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
});