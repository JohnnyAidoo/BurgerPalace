
import { Dimensions, ScrollView, StyleSheet , Image , View, FlatList, ImageBackground} from 'react-native';
import {TextInput, IconButton, Surface, Text, Button, Pressable} from '@react-native-material/core'
import { Octicons } from '@expo/vector-icons';
import MiniCard from '../../components/minCard';
import MediumCard from '../../components/meduimCard';



export default function TabOneScreen() {

  const num:number[] = [1,2,3,4,5,6,7,8,9,0];
  const numColumns:number = 2

  const WIDTH = Dimensions.get('window').width

  return (
   <>
  

    <ScrollView >
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
      <MiniCard styles='' imageUrl={require('../../assets/images/img/burger.png')} title={'burger'} />
      <MiniCard styles='' imageUrl={require('../../assets/images/img/pizza.png')} title={'pizza'} />
      <MiniCard styles='' imageUrl={require('../../assets/images/img/drink.png')} title={'drinks'} />
    </View>
    </ImageBackground>
    
    
     <View style={{padding:20, backgroundColor:'white'}}>

    {/* discount card */}

    <Surface elevation={10} style={{backgroundColor:'#f9d368' , borderRadius:30, height:150,alignItems:'center', flexDirection:'row',justifyContent:'space-around'}} >
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
          <Button title='Order Now' color='#fcd22f' />
        </View>
    </Surface>

      {/* popular foods */}
        <View style={{flexDirection:'row', justifyContent:'space-between' , marginTop:20 }}>
          <Text>Popular Foods</Text>
          <Pressable>
            <Text color='#fcd22f'>See all {'>'}</Text>
          </Pressable>
        </View>
      
      <View>
        <FlatList
        numColumns={numColumns}
        data={num}
        
        scrollEnabled={false}
        renderItem={()=>(
          <MediumCard
           imageUrl={require('../../assets/images/img/burger.png')} 
           title={'drinks'} />
        )}
        />
      </View>
   </View>
   </ScrollView>

   

   </>
  );
}

