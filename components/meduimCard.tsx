import { FontAwesome } from '@expo/vector-icons';
import {IconButton, Pressable, Surface, Text, } from '@react-native-material/core'
import { Image, View } from 'react-native'
import {useState} from 'react'
import { useRouter } from 'expo-router';


function MediumCard(props:{imageUrl:any, title:any}) {

    const router = useRouter()
    
    const [fav, setfav] = useState(false)

    return (
        <>
        
        <Surface category='large' elevation={1}  style={{width:'50%',height:undefined, aspectRatio:5/7, paddingBottom:10, backgroundColor:'transparent'}} >
            <Pressable 
            onPress={()=> router.push('/modal')}>
            <IconButton style={{alignSelf:'flex-end', marginBottom:-10}}
             icon={<FontAwesome name={fav ? 'heart' : 'heart-o'} size={20} color={fav ? 'yellow' : 'grey'}/>}
             onPress={()=> {fav ? setfav(false) : setfav(true)}} 
             
            />
            <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'transparent'}}>
           <Image source={props.imageUrl} style={{aspectRatio:1, height:undefined, width:'60%', resizeMode:'cover'}} /> 
            <Text style={{textAlign:'center', padding:10,}}>{props.title}</Text>
            <View style={{flexDirection:'row', justifyContent: 'space-between', width:'90%'}}>
                <Text variant='caption'>$50</Text>
                <View style={{flexDirection:'row'}}>
                <FontAwesome name='star' color={'yellow'} size={15}/>
                <Text variant='button'>5.4</Text></View>
            </View>
            </View>
            </Pressable>
        </Surface>
        </>
    );
}

export default MediumCard;