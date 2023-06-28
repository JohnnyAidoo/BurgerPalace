import { FontAwesome } from "@expo/vector-icons";
import { Avatar, Button, ListItem, Surface, Text } from "@react-native-material/core";
import { View , Image} from 'react-native'



function CheckOut() {


    const lightcolor = '#FFF5B0'
    const deepcolor = '#FFD24E'
    
    return ( 
        <>
        <Surface style={{height:'100%', paddingHorizontal:20 , justifyContent:'center' }}>
            <View>
                <Text variant="h6" style={{marginVertical:20}}>Delivery Address</Text>
                <Surface elevation={4} >
                    <ListItem 
                    style={{width:'100%'}}
                    title="Home"
                    secondaryText="216/ East Custom Chhatak"
                    trailing={()=> (<FontAwesome name="check-circle" size={20} color={deepcolor} />)}
                    />
                </Surface>
                <View style={{justifyContent:'space-between', height:'60%'}}>
                    <Text variant="h6" style={{marginVertical:20}}>Payment Method</Text>
                    <Surface elevation={4} >
                        <ListItem 
                        leadingMode="avatar"
                        style={{width:'100%'}}
                        title="Visa Card"
                        secondaryText="**** **** **** 5162"
                        leading={<Image source={require('../assets/images/img/credit-card.png')} style={{aspectRatio:1, height:'60%'}} />}
                        trailing={()=> (<FontAwesome name="check-circle" size={20} color={deepcolor} />)}
                    />
                    </Surface>
                    <Surface elevation={4} >
                        <ListItem 
                        leadingMode="avatar" 
                        style={{width:'100%'}}
                        title="Cash On Delivery"
                        secondaryText="Pay after delivery"
                        leading={<Image source={require('../assets/images/img/money.png')} style={{aspectRatio:1, height:'60%'}} />}
                        trailing={()=> (<FontAwesome name="check-circle" size={20} color={deepcolor} />)}
                    />
                    </Surface>
                    <Surface elevation={4} >
                        <ListItem 
                        leadingMode="avatar"
                        style={{width:'100%'}}
                        title="Paypal"
                        leading={<Image source={require('../assets/images/img/paypal.png')} style={{aspectRatio:1, height:'60%'}} />}
                        secondaryText="johnnyoseiaidoo65@paypal"
                        trailing={()=> (<FontAwesome name="check-circle" size={20} color={deepcolor} />)}
                    />
                    </Surface>
                    <Button title='Order Now' 
                    color={deepcolor}
                    style={{marginTop:20, padding:10}} /> 
                </View>
            </View>
        </Surface>
        </>
    );
}

export default CheckOut;