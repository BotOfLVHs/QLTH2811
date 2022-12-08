import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ThanhToan = ({navigation}) => {
  return (
    <View style={styles.header_container}>
          <TouchableOpacity onPress={()=>{Alert.alert('hi');}}>
            <Text>
              <IonIcons
                style={{color: 'green', textAlign: 'center'}}
                name="arrow-back"
                size={31}
              />
            </Text>
          </TouchableOpacity>
          <Text style={styles.txt_main}>Thanh Toán</Text>
          <TouchableOpacity onPress={()=>{}}>
            <Text>
              <IonIcons
                style={{color: 'green', textAlign: 'center'}}
                name="search"
                size={30}
              />
            </Text>
          </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    header_container: {
      padding: 15,
      backgroundColor: '#eeeeee',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    txt_main: {
      fontSize: 22,
    },
})
export default ThanhToan
