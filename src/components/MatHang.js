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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { transform } from '@babel/core';
import { Dimensions } from 'react-native';
import { SearchBar } from 'react-native-screens';
//import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
export default MatHang = function ({ navigation = useNavigation() }) {
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

  return (
    <View style={{ height: 100, }}>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.MAMH}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ChitietMH", {
                MAMH: item.MAMH,
              })}
              style={styles.matHang}>
              <Image
                style={{ width: 50, height: 50, resizeMode: 'cover', borderRadius: 10, margin: 10 }}
                source={{ uri: item.HINHANH }} />
              <View style={styles.label}>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 13, textAlign: 'center' }}>
                  {item.SOTIENCOTHUE.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' đ'}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
        style={{ flex: 1 }}>
      </FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
  dsMatHang: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  matHang: {
    height: 100,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    margin: 10,
  },
  label: {
    backgroundColor: '#FF4646',
    width: 100,
    marginTop: -13,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    marginLeft: -10,
  },


});