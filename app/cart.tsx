
import { FontAwesome } from '@expo/vector-icons';
import { Button, Pressable, Surface ,Text } from '@react-native-material/core';
import {FlatList, View ,Image, Dimensions} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler';

function Cart() {

    const list = ['wee','wee','wee','wee']
    const WIDTH:number = Dimensions.get('window').width


    return (
        <>
        <FlatList 
        style={{backgroundColor:'white'}}
        data={list}
        renderItem={()=>(
            <Surface elevation={1} style={{justifyContent:'space-around', flexDirection:'row', alignItems:'center',marginBottom:10}}>
                <View style={{backgroundColor:'#e0e0e0', padding:10, borderRadius:10}} >
                    <Image source={require('../assets/images/img/burger.png')} 
                    style={{aspectRatio: 1, height:50}}
                    />
                </View>
                <View>
                    <Text>Sandwich Burger</Text>
                    <Text>3</Text>
                </View>
                <View>
                    <Text>$32.00</Text>
                    
                </View>
            </Surface>
        )}
        />
         {/* bottom  */}
    <Surface 
    style={{padding:10, position: 'absolute',bottom:0,
    flexDirection:'row', backgroundColor:'#f9d368',width:WIDTH,
    justifyContent:'space-evenly'
    }}
     >
      <Surface style={{ alignItems:'flex-start', paddingLeft:10,
        borderRadius:5, width:WIDTH/3, justifyContent:'space-evenly'}}>
      <Text variant='subtitle2'>Total</Text>
      <Text>$138.00</Text>
      </Surface>

     
      <Button title='Place Order' 
      style={{width:WIDTH/2}}
       color='#fcd22f' elevation={1} />

    </Surface>
        </>
    );
}

export default Cart;