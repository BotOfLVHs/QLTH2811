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
import { useNavigation } from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/MaterialIcons';

export default MatHangTheoLoai = function({navigation = useNavigation(), route}){
    const id = route.params.MALOAI;
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState()
    const [value, setValue] = useState()
    const [search, setSearch] = useState('');
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        getLoaiHang();
        getTimKiem();
      }, []);
      //List MH
    const getLoaiHang = () => {
        axios
          .get(
            'https://sheetdb.io/api/v1/e3l66thzdhdwt/search?MALOAI=' + id,
          )
          .then(json => setCategories(json.data));
    };
    const getTimKiem = () => {
      axios
        .get(
          'https://sheetdb.io/api/v1/e3l66thzdhdwt/search?MALOAI=' + id,
        )
        .then(
        json2 => setFilterData(json2.data));
        
    };
    const updateSearch = (text) => {
      if (text) {
        const newData = categories.filter(function (item) {
        const itemData = item.TENMH
            ? item.TENMH.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);
        setSearch(text);
      } else {
        setFilterData(categories);
        setSearch(text);
      }
    }
    const renderItem = ({item, index}) => {
        return (
        // <View style={styles.items}>
        //     <View style={styles.productCard}>
        //         <TouchableOpacity
        //             onPress={() =>
        //                 navigation.navigate("ChitietMH", {
        //                     MAMH: item.MAMH,
        //                   })
        //               }>
        //                 <View>
        //                     <Image
        //                         style={styles.image}
        //                         source={{uri: item.HINHANH}}
        //                     />
        //                 </View>
        //                 <View>
        //                     <Text style={{alignItems: 'center',fontSize: 16, paddingLeft: 8}}>{item.TENMH}</Text>
        //                 </View>
        //                 <View>
        //                     <Text style={{fontSize: 16, paddingLeft: 8}}>{item.DONGIA}</Text>
        //                 </View>
        //         </TouchableOpacity>
        //     </View>
            
        // </View>
        <TouchableOpacity
          key={index}
          style={{
            justifyContent: "center",
            marginRight: 5,
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 15,
            height: 200,
            width: "48.5%"
          }}
          onPress={() => navigation.navigate("ChitietMH", {MAMH: item.MAMH,})}>
          <View
            style={{
              flex: 1,

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={{uri: item.HINHANH}}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%"
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10
            }}
          >
            <Text
              numberOfLines={1}
              style={{ fontSize: 15, color: "#333", fontWeight: "bold" }}
            >
              {item.TENMH}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#333",
                  marginRight: 7,
                  fontWeight: "bold"
                }}
              >
                {item.DONGIA}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9a9a9a"
                }}
              >
                / {item.DVT}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "flex-end"
              }}
            >
            </View>
          </View>
        </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={[styles.containerS]}>
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                  <IonIcons
                    style={{color: 'blue', textAlign: 'center'}}
                    name="search"
                    size={30}
              />
                </View>
                <TextInput
                    value={search}
                    placeholder="Tìm theo tên mặt hàng..."
                    style={styles.textInput}
                    onChangeText={(text) => updateSearch(text)}
                />
            </View>
            {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            }
        </View >
            <FlatList 
                numColumns={2}
                data={filterData}
                keyExtractor={item => item.MAMH}
                renderItem={renderItem}
                style={styles.container}
                initialNumToRender={6}>
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
      vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        // backgroundColor: 'green',
        flex: 1,
    },
  
    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        backgroundColor: 'white',
        width: '90%',
        height: 40,
        flexDirection: 'row',
        borderRadius:10,
  
    },
    containerS: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:0,
      // height: '100%', width: '100%' 
  },
});