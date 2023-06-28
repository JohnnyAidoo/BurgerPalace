import {Pressable, Surface, Text, } from '@react-native-material/core'
import { useRouter } from 'expo-router';
import { Image } from 'react-native'


function MiniCard(props:{imageUrl:any, title:any, styles:any, route:any}) {

    const router = useRouter()

    return (
        <>
        
        <Surface category='small' elevation={1}  style={props.styles}>
            <Pressable style={{alignItems:'center', justifyContent:'center', backgroundColor:'transparent'}}
            onPress={()=> router.push(props.route)}
            >
           <Image source={props.imageUrl} style={{aspectRatio:1, height:undefined, width:'30%', resizeMode:'contain'}} /> 
            <Text>{props.title}</Text>
            </Pressable>
        </Surface>
        </>
    );
}

export default MiniCard;