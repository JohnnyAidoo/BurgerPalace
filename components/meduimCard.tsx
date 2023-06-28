import { FontAwesome } from '@expo/vector-icons';
import {IconButton, Pressable, Surface, Text, } from '@react-native-material/core'
import { Image, View } from 'react-native'
import {useState} from 'react'
import { useRouter } from 'expo-router';
import { SharedElementTransition } from 'react-native-shared-element';
let favlist:any = [];
function MediumCard(props:{imageUrl:any, title:any}) {

    const lightcolor = '#FFF5B0'
    const deepcolor = '#FFD24E'

    const router = useRouter()
    const rating = '5.4'
    const price = '$50'
    
    const navigate = () =>{
        router.push('modal')
        router.setParams({
            imageUrl:props.imageUrl as string,
            title: props.title,
            rating: rating,
            price: price
        })
    }

    const [fav, setfav] = useState(false)
    

    const onFavClick =()=>{
        fav ? setfav(false) : setfav(true);
        favlist.push({
            name: props.title,
            image: props.imageUrl
        })
    }

    return (
        <>
        
        <Surface category='large' elevation={5}  style={{width:'47%',height:undefined, aspectRatio:5/7, paddingBottom:10, backgroundColor:'#fff', margin:5}} >
            <Pressable 
            onPress={navigate}>
            <IconButton style={{alignSelf:'flex-end', marginBottom:-10}}
             icon={<FontAwesome name={fav ? 'heart' : 'heart-o'} size={20} color={fav ? deepcolor : 'grey'}/>}
             onPress={onFavClick} 
             
            />
            <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'transparent'}}>
           <Image source={{uri: props.imageUrl}} style={{aspectRatio:1, height:undefined, width:'60%', resizeMode:'cover'}} /> 
            <Text style={{textAlign:'center', padding:10,}}>{props.title}</Text>
            <View style={{flexDirection:'row', justifyContent: 'space-between', width:'90%'}}>
                <Text variant='caption'>{price}</Text>
                <View style={{flexDirection:'row'}}>
                <FontAwesome name='star' color={deepcolor} size={15}/>
                <Text variant='button'>{rating}</Text></View>
            </View>
            </View>
            </Pressable>
        </Surface>
        </>
    );
}

export {favlist}
export default MediumCard;
