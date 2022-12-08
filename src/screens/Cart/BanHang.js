import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Cart = ({navigation}) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.iconTop}>
        <View style={styles.iconBack}>
          <MaterialIcons
            onPress={() => navigation.navigate('HomeScreen')}
            name="arrow-back"
            size={25}
          />
        </View>
      </View>
      <View style={styles.totalParent}>
        <View style={styles.total}>
          <Text style={styles.textHeading}>Total Items</Text>
          <Text style={{fontWeight: 'bold'}}>4</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.textHeading}>Price</Text>

          <Text style={{fontWeight: 'bold'}}>$ 73.50</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.textHeading}>Total Price</Text>
          <Text style={{fontWeight: 'bold'}}>$ 73.50</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.checkoutBtn}>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            Checkout
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 6,
    marginTop: -60,
  },
  productCard: {
    height: 230,
    width: 166,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  iconBack: {
    backgroundColor: '#FFFFFF',
    padding: 3,
    elevation: 2,
    borderRadius: 5,
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  totalParent: {
    padding: 10,
    marginTop: 10,
    margin: 5,
  },
  checkoutBtn: {
    backgroundColor: '#40AA54',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingLeft: 7,
    paddingRight: 7,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    padding: 10,
    elevation: 5,
    margin: 10,
  },
  cartSubItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  innerText: {
    display: 'flex',
    width: 130,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textHeading: {
    color: '#16162E',
    fontSize: 16,
    marginTop: 7,
  },
});

export default Cart;
