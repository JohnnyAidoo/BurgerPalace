import Feather from '@expo/vector-icons/Feather';
import { Link, Tabs, useRouter } from 'expo-router';
import {IconButton, Pressable} from '@react-native-material/core'
import {  View, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import { Drawer } from 'expo-router/drawer';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={25} style={{ marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
  const router = useRouter();

  const opendrawer = () =>{
    return(<Drawer>
      <Drawer.Screen name='hello' />
    </Drawer>)
  }

  return (
    <>   
      <Tabs
        screenOptions={{
          tabBarStyle:{backgroundColor:'#fff'},
          headerShadowVisible: false,
          headerTitleAlign:'left',
          headerTitle:'',
          headerRight: () => (
            <View style={{flexDirection:'row', justifyContent:'space-evenly' ,width:80}}>
              <IconButton 
              icon={<Feather name='bell' size={20} />}
              />
              <IconButton 
              onPress={() => router.push('cart')}
              icon={<Feather name='shopping-bag' size={20} />}
              />
              
            </View>

          ),
          headerStyle:{backgroundColor:'#F4EBAA'},
          tabBarActiveTintColor:'#F4EBAA',
          
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            headerShown: false,
            title: 'Favorite',
            tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          }}
        />
        
      </Tabs>
    </>
  );
}
