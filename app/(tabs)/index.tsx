
import { Dimensions, ScrollView, StyleSheet , Image , View, FlatList, ImageBackground} from 'react-native';
import {TextInput, IconButton, Surface, Text, Button, Pressable, AppBar} from '@react-native-material/core'
import {  Octicons} from '@expo/vector-icons';
import MiniCard from '../../components/minCard';
import MediumCard from '../../components/meduimCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';



export default function TabOneScreen() {
  const lightcolor = '#FFF5B0'
  const deepcolor = '#FFD24E'

  interface Meal{
    idMeal:string,
    strMeal:string,
    strMealThumb:string
}

  const [meals, setMeals]= useState<Meal[]>([]);

  const numColumns:number = 2
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous'
  useEffect(() =>{
    const fetchdata = async () =>{
      try{
        const fetch = await axios.get(url).then((res) => {
          setMeals(res.data.meals)
        })
      }catch(err){console.log(err)}
    }

    fetchdata()
  },)
  const WIDTH = Dimensions.get('window').width

  return (
   <>
    <StatusBar style='dark' animated />
    
    <ScrollView style={{backgroundColor:'#fff'}} >
    <ImageBackground resizeMode='stretch' 
    style={{backgroundColor:'white'}}
    source={require('../../assets/images/img/wave.png')}>
    <View style={{paddingLeft:20, paddingRight:20}} id='searchBar'>
      <TextInput
      placeholder='search for food'
      color='#fcd25f'
       variant='outlined'
       inputContainerStyle={{maxHeight:55, justifyContent: 'center'}}
       style={{borderColor: 'transparent'}}
       trailing={
      <IconButton icon={<Octicons name='filter' style={{backgroundColor:'#F4EBAA', padding:10, borderRadius:10}} size={15}  />} />} 
      leading={<IconButton icon={<Octicons name='search' size={20} style={{color:'grey'}} />} />}
      />
    </View>

    {/* categories tab  */}
    <View style={{paddingLeft:20,paddingRight:20,flexDirection:'row',justifyContent:'space-around' , paddingTop: 10, backgroundColor:'transparent',marginBottom:10}} id='categoriesTabs'>
      <MiniCard route={'tab1'} styles='' imageUrl={require('../../assets/images/img/burger.png')} title={'BreakFast'} />
      <MiniCard route={'tab2'} styles='' imageUrl={require('../../assets/images/img/pizza.png')} title={'Side'} />
      <MiniCard route={'tab3'} styles='' imageUrl={require('../../assets/images/img/drink.png')} title={'Desert'} />
    </View>
    </ImageBackground>
    
    
     <View style={{padding:20, backgroundColor:'white'}}>

    {/* discount card */}

    <Surface elevation={10} style={{backgroundColor:'#FFF5B0' , borderRadius:30, height:160,alignItems:'center', flexDirection:'row',justifyContent:'space-around'}} >
        <View  style={{width:110}}>
          <Image source={require('../../assets/images/img/logo.png')} style={{width:'100%', resizeMode:'contain'}}/>
        </View >
        <View style={{width:150}}>
          <Text variant='h5' style={{fontWeight:'bold'}} >
            30% Discount
          </Text>
          <Text variant='subtitle2'>
            Order any food from app and get the discount
          </Text>
          <Button title='Order Now' color='#FFD24E' />
        </View>
    </Surface>

      {/* popular foods */}
        <View style={{flexDirection:'row', justifyContent:'space-between' ,marginVertical:20}}>
          <Text>Popular Foods</Text>
          <Pressable>
            <Text color={deepcolor}>See all {'>'}</Text>
          </Pressable>
        </View>
      
      <View>
        <FlatList 
        data={meals}
        scrollEnabled={false}
        numColumns={numColumns}
        renderItem={({item}) =>(
          <MediumCard 
          imageUrl= {item.strMealThumb}
          title={item.strMeal}
          key={item.idMeal}
          />
        )}
        />
      </View>
   </View>
   </ScrollView>

   

   </>
  );
}
