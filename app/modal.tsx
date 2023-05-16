import { Surface } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, View, Image }  from 'react-native';

export default function ModalScreen() {
  return (
  <>
  <ImageBackground source={require('../assets/images/img/wave2.png')}
  resizeMode='cover'
  >
  <View style={{height:110, alignItems:'center'}}>
    <Image 
    source={require('../assets/images/img/burger.png')}
     resizeMode='center'/>
  </View>
  </ImageBackground>
  
  </>
  );
}

