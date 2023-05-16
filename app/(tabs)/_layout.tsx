import Feather from '@expo/vector-icons/Feather';
import { Link, Tabs, useRouter } from 'expo-router';
import {IconButton, Pressable} from '@react-native-material/core'
import {  View, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerRight: () => (
          <View style={{flexDirection:'row', justifyContent:'space-evenly' ,width:80}}>
            <IconButton 
            icon={<Feather name='bell' size={20} />}
            />
            <IconButton 
            icon={<Feather name='shopping-bag' size={20} />}
            />
            
          </View>

        ),
        headerStyle:{backgroundColor:'#F4EBAA'},
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () =>(
           <IconButton icon={<Feather name='list' size={20}/>} 
           onPress={() => router.push('/modal')}
           />
            
          ),
         
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          headerStyle:{backgroundColor:'#fff'},
          headerTitle:'Food Category',
          title: 'Category',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
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
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
 
    </Tabs>
  );
}
