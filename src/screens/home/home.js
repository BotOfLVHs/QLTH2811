import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dropdown,
} from 'react-native';
import HeaderComp from '../../components/Header';
import LoaiHang from '../../components/LoaiHang';
import MatHang from '../../components/MatHang';
// import LoaiHang from '../../function/load';
// import getLoai from  '../../function/load';
import AntIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/MaterialIcons';
import Grid_MatHang from '../../components/Grid_MatHang';
export default HomeScreen = function({ navigation}){
  return (
    <View>
      <StatusBar backgroundColor="#828282" />
      <HeaderComp />
      <ScrollView>
        <View
          style={{
            padding: 20,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <TextInput
            style={styles.input}
            placeholder="Tên sản phẩm"
            underlineColorAndroid="transparent"
          />
          <View style={styles.filter}>
            <IonIcons
              style={{color: 'white', textAlign: 'center'}}
              name="search"
              size={25}
            />
          </View>
        </View>
      <View style={styles.categories}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 18,
            paddingLeft: 18,

            marginTop: 10,
          }}>
          <Text style={{color: '#16162E', fontSize: 18, fontWeight: 'bold'}}>
            Loại hàng
          </Text>
          <Text style={{color: '#F33A63', fontSize: 14, fontWeight: 'bold'}}>
            Thêm
          </Text>
        </View>

        </View>
          <LoaiHang/>
        <View style={styles.tabs}>
          <Text style={styles.tabFontNew}>Mới</Text>
          <Text style={styles.tabFont}>Phổ biến</Text>
          <Text style={styles.tabFont}>Giảm giá</Text>
          <Text style={styles.tabFont}>Tất cả</Text>
        </View>
        <View style={styles.categories}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingRight: 18,
              paddingLeft: 18,
              marginTop: 10,
            }}>
            <Text style={{color: '#16162E', fontSize: 18, fontWeight: 'bold'}}>
              Sản phẩm mới
            </Text>

            <Text
              onPress={() => navigation.navigate('moreProducts')}
              style={{color: '#F33A63', fontSize: 14, fontWeight: 'bold'}}>
              xem tiếp
            </Text>
          </View>
          <MatHang/>
        </View>
        <View style={styles.categories}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingRight: 18,
              paddingLeft: 18,
              marginTop: 10,
            }}>
            <Text style={{color: '#16162E', fontSize: 18, fontWeight: 'bold'}}>
              Popular product
            </Text>
            <Text style={{color: '#F33A63', fontSize: 14, fontWeight: 'bold'}}>
              See all
            </Text>
          </View>
            <Grid_MatHang/>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  location: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  searchBar: {
    width: '100%',
    padding: 20,
  },
  input: {
    paddingTop: 10,
    width: 300,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius: 8,
  },
  label: {
    backgroundColor: '#FF4646',
    width: 100,
    marginTop: -13,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    marginLeft: -10,
  },
  filter: {
    backgroundColor: '#40AA54',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  slider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  salesSlider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  heartIcon: {
    marginTop: 10,
  },
  categoryBox: {
    height: 74,
    width: 69,
    padding: 7,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    margin: 10,
    elevation: 1,
    borderRadius: 3,
  },
  tabs: {
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabFont: {
    fontSize: 14,
  },
  tabFontNew: {
    fontSize: 14,
    color: '#63B974',
    fontWeight: 'bold',
    borderBottomColor: '#63B974',
    borderBottomWidth: 2,
  },
  sales: {
    height: 100,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    margin: 10,
  },
  productCard: {
    height: 230,
    width: 166,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 5,
  },
});

/**
 * npm install --save react-native-vector-icons
 */