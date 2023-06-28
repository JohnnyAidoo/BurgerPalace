import { Feather, Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter, } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme , View } from 'react-native';
import { IconButton } from '@react-native-material/core'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter()

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        
        <Stack screenOptions={{headerShadowVisible: false}}>
          
          <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
          
          <Stack.Screen name="modal" options={{ presentation: 'fullScreenModal',
          headerTitle:'', headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25} />) ,
          headerStyle:{backgroundColor:'#F4EBAA'},
          }}
           />

           <Stack.Screen name='cart' 
           options={{headerStyle:{backgroundColor:'white'}, 
           headerTitle:'My Cart List',
           headerTitleStyle:{color:'#000'},
           headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25} />) 
            }}/>
          
           <Stack.Screen name='tab1' 
           options={{headerStyle:{backgroundColor:'white'},
           headerTitleStyle:{color:'#000'},
           headerTitle:'Breakfast',
           headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25}
            />) ,
            headerRight: () => (
              <View style={{flexDirection:'row', justifyContent:'space-evenly' ,width:80}}>
                <IconButton 
                icon={<Feather name='bell' size={20} />}
                />
                <IconButton 
                onPress={() => router.push('cart')}
                icon={<Feather name='shopping-bag' size={20} />}
                />
                
              </View>)
          }}/>
           <Stack.Screen name='tab2' 
           options={{headerStyle:{backgroundColor:'white'}, 
           headerTitle:'Side',
           headerTitleStyle:{color:'#000'},
           headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25}
            />) ,
            headerRight: () => (
              <View style={{flexDirection:'row', justifyContent:'space-evenly' ,width:80}}>
                <IconButton 
                icon={<Feather name='bell' size={20} />}
                />
                <IconButton 
                onPress={() => router.push('cart')}
                icon={<Feather name='shopping-bag' size={20} />}
                />
                
              </View>)
          }}/>
           <Stack.Screen name='tab3' 
           options={{headerStyle:{backgroundColor:'white'}, 
           headerTitle:'Dessert',
           headerTitleStyle:{color:'#000'},
           headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25}
            />) ,
            headerRight: () => (
              <View style={{flexDirection:'row', justifyContent:'space-evenly' ,width:80}}>
                <IconButton 
                icon={<Feather name='bell' size={20} />}
                />
                <IconButton 
                onPress={() => router.push('cart')}
                icon={<Feather name='shopping-bag' size={20} />}
                />
                
              </View>)
          }}/> 
          <Stack.Screen name='checkout' options={{headerStyle:{backgroundColor:'white'}, headerTitleStyle:{color:'black'}}}/>
          
        </Stack>
      </ThemeProvider>
    </>
  );
}
