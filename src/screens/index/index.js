import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';


import Login from '../login/login';
import Login2 from '../login/login2';
import Login3 from '../login/login3';
import Login4 from '../login/login4';
// import Login5 from '../login/login5';
import LoginView from '../login/loginView';
import RegisterView from '../register/registerView';
import HomeScreen from '../home/home';
import QLMH from '../QL_MH/QLMH';
import ThanhToan from '../ThanhToan/ThanhToan';
import Grid_MatHang from '../../components/Grid_MatHang';

import LayoutComponent from '../layoutTest/layout';
import HomeScreenTest from '../layoutTest/home';
  

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


var ngayHT = new Date();
const Getstarteds =() =>{
  return(
    <Drawer.Navigator initialRouteName='Getstarted1' screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Getstarted1" component={Login} />
      <Drawer.Screen name="Getstarted2" component={Login2} />
      <Drawer.Screen name="Getstarted3" component={Login3} />
      <Drawer.Screen name="Getstarted4" component={Login4} />
      {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds()+' End Getstarted Screens.')}
    </Drawer.Navigator>
  );
}
const Handles =() =>{
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
    {/* npm install @react-navigation/bottom-tabs */}
      <Tab.Screen name="Đăng nhập" component={LoginView} />
      <Tab.Screen name="Đăng ký" component={RegisterView} />
      {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds()+' End Login Screens.')}
     </Tab.Navigator>
  );
}
const LoginRegister =() =>{
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
    {/* npm install @react-navigation/bottom-tabs */}
      <Tab.Screen name="Đăng nhập" component={LoginView} />
      <Tab.Screen name="Đăng ký" component={RegisterView} />
      {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds()+' End Login Screens.')}
     </Tab.Navigator>
  );
}
export default function RootComponent() {
    var [getLoginedStatus, setLoginedStatus] = React.useState(true); //false=chua login
  return (
    <NavigationContainer>
      {getLoginedStatus?
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={Grid_MatHang} />
        {/* ThanhToan, HomeScreen,  */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="ThanhToan" component={ThanhToan} />
        {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds()+' End Handles Screens.')}

      </Stack.Navigator>:
      <Stack.Navigator initialRouteName='Getstarted' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Getstarted" component={Getstarteds} />
        <Stack.Screen name="LoginRegister" component={LoginRegister} />
        <Stack.Screen name="LoginView" component={LoginView} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Test" component={LayoutComponent} />
        {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds()+' End all Screens2.')}

      </Stack.Navigator>
      
    }
      {/* <Stack.Navigator initialRouteName='Getstarted1' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Getstarted1" component={HomeScreenTest} />
        <Stack.Screen name="Getstarted2" component={Login2} />
        <Stack.Screen name="Getstarted3" component={Login3} />
        <Stack.Screen name="Getstarted4" component={Login4} />
        <Stack.Screen name="LoginView" component={LoginView} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Test" component={LayoutComponent} />
        {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds()+' End Login Screens.')}

      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
/**
 * *********NativeStack***********https://reactnavigation.org/docs/getting-started
 * =====expo cai khac
 * Cai "npm install @react-navigation/native",
 * 'npm install react-native-screens react-native-safe-area-context',
 * 'npx pod-install ios'=======
 * Dán: 
 * '@Override
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    }'
    Và
* Dán: 'import android.os.Bundle;'
    Vào:'android\app\src\main\java\com\demo2\MainActivity.java'
* Cài stack: 'npm install @react-navigation/native-stack'

***********Ảnh động vào project
'implementation 'com.facebook.fresco:animated-gif:2.5.0'
* Dán: 'implementation 'com.facebook.fresco:animated-gif:2.5.0'
    Vào:'android\app\build.gradle' dependencies {
 */

      /** navigation
       * navigation.pop(2)
       * navigation.popToTop(2)
       * navigation.goBack()
       * navigation.navigate('')
       */
      /**uploa
       * npm install cloudinary-core --save
       * var cl = new cloudinary.Cloudinary({cloud_name: "drdpsyw02", secure: true});
       */