import { FontAwesome, Octicons } from '@expo/vector-icons';
import { Surface, Button, IconButton, Pressable, Text, ListItem } from '@react-native-material/core';
import {useSearchParams} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import {ImageBackground, View, Image, Dimensions, ScrollView }  from 'react-native';

const ingredients:string[] = ['pepper','tomato','dough','carrot','cabbages', 'alot']


export default function ModalScreen() {

  const lightcolor = '#FFF5B0'
    const deepcolor = '#FFD24E'

  const [numOfOder, setNumberOfOder] = useState(1)
  const {title, imageUrl, price} = useSearchParams()
  const image = {uri: imageUrl};
  const [tabElement, setTabELement] = useState(Details);
  const WIDTH:number = Dimensions.get('window').width


  return (
  <>
  <ScrollView style={{paddingBottom:500, backgroundColor:'white'}}>
  <ImageBackground source={require('../assets/images/img/wave2.png')}
  resizeMode='cover'
  style={{backgroundColor:'white'}}
  >
    <Image
    id='banner'
    source={{uri : imageUrl as string}}    
     resizeMode='center'
     style={{height:200, alignItems:'center', borderRadius:10}}
     />
  </ImageBackground>
  <Surface style={{padding:10}}>
    <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
    <Text variant='h5' style={{fontWeight:'bold'}} >
      {title}
    </Text>
    <IconButton icon={<FontAwesome name='heart' size={15} color={'yellow'} />} />
    </View>
    <Text><Octicons name='location' color={'yellow'} /> Italiano Resturant an Coffee</Text>
    <View id='ratings' style={{flexDirection:'row', justifyContent:'space-around', paddingTop:10}}>
      <Text variant='button'><FontAwesome name='star'  color={'yellow'} size={15} /> 4/5</Text>
      <Text variant='button'><FontAwesome name='clock-o'  color={'yellow'} size={15} /> 9:45</Text>
      <Text variant='button'><FontAwesome name='location-arrow' color={'yellow'} size={15} />23km</Text>
    </View>
    
    <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%', marginTop:25}}>
      <Pressable onPress={()=>setTabELement(Details)}>
        <Text>Details</Text>
      </Pressable>
      <Pressable onPress={()=>setTabELement(Ingredient)}>
        <Text>Ingredients</Text>
      </Pressable>
    </View>

    <Surface elevation={1} style={{padding:20}}>
    {tabElement}
    </Surface>
  </Surface>
  </ScrollView>


    {/* bottom  */}
    <Surface 
    style={{padding:10, position: 'absolute',bottom:0,
    flexDirection:'row', backgroundColor: lightcolor ,width:WIDTH,
    justifyContent:'space-evenly'
    }}
     >
      <Surface style={{flexDirection:'row', alignItems:'center', 
      padding:10, borderRadius:5, width:WIDTH/2.5, justifyContent:'space-evenly'}}>
        <Pressable
        onPress={() => numOfOder <= 1 ? null : setNumberOfOder(numOfOder-1)}
        >
          <FontAwesome name='minus' color={'grey'} />
        </Pressable>
        <Text>{numOfOder}</Text>
        <Pressable
        onPress={()=>setNumberOfOder(numOfOder+1)}
        >
          <FontAwesome name='plus' color={'grey'} />
        </Pressable>
      </Surface>

     
      <Button title={`$${numOfOder * 14} | Add To Cart`} color={deepcolor} elevation={1} />

    </Surface>
    
  </>
  );
}

function Details() {
  return (
    <>
    <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat consequuntur maxime fugiat, architecto voluptate aut sapiente nemo et labore veritatis voluptatum debitis similique minima quas expedita non, aperiam ad? Quidem!</Text>
    </>
  );
}
function Ingredient() {
  return (
    <>
    {ingredients.map((ingredient) =>(
      <ListItem
      key={ingredient}
      leading={<FontAwesome name='check' color={'#fcd22f'} />}
       title={ingredient} />
    ))}
    </>
  );
}
function Review() {
  return (
    <>
    <Text >review</Text>
    </>
  );
}


