
import { FontAwesome } from '@expo/vector-icons';
import { Avatar, Button, Icon, ListItem, Pressable, Surface ,Text } from '@react-native-material/core';
import { useRouter } from 'expo-router';
import {FlatList, View ,Image, Dimensions} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler';

function Cart() {

    const list = ['wee','wee','wee','wee']
    const WIDTH:number = Dimensions.get('window').width
    const router = useRouter()


    return (
        <>
        <FlatList 
        style={{backgroundColor:'white'}}
        data={list}
        renderItem={()=>(
            <Surface elevation={4} style={{marginVertical:5}}>
                <ListItem
    
                leadingMode='avatar' 
                title='Sandwich Burgur'
                leading={<Avatar initials label='Burgur La' />}
                secondaryText='3'
                trailing={<Text style={{marginLeft:-20}}>30.00</Text>}
                />
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
      onPress={() => router.push('checkout')} 
      style={{width:WIDTH/2}}
       color='#fcd22f' elevation={1} />

    </Surface>
        </>
    );
}

export default Cart;