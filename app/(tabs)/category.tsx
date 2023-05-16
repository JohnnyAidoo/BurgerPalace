import {AppBar, IconButton, Surface, Text} from '@react-native-material/core'
import {Dimensions, View, FlatList, ScrollView} from 'react-native'
import { Feather } from '@expo/vector-icons';
import MiniCard from '../../components/minCard';
import MediumCard from '../../components/meduimCard';


function Category() {
    const WIDTH:number = Dimensions.get('window').width
    const HEIGHT:number = Dimensions.get('window').height

    const list:number[] = [1,2,3,4,4,5,5,6]

    return ( 
        <View style={{width:WIDTH, flexDirection:'row' }}>
            <Surface id='sidebar' style={{ width:'20%',backgroundColor:'#10101005'}}>

            <FlatList
            data={list}
            renderItem ={()=>
            <MiniCard styles={{marginBottom:10, marginTop:10}} title={'Fast Food'} imageUrl={require('../../assets/images/img/drink.png')} />}
            />

            </Surface>
            <Surface style={{width:WIDTH-70, paddingLeft:10}} >
                <FlatList
                numColumns={2}
                data={list}
                renderItem={CategorySelected}
                />
            </Surface>
        </View>
    );
}

const CategorySelected =()=>{
    return (
        <>

        <MediumCard title={'burger'} imageUrl={require('../../assets/images/img/burger.png')}  />
        </>
    )
}

export default Category;