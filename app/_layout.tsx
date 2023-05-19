import { Feather, Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

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
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          
          <Stack.Screen name="modal" options={{ presentation: 'fullScreenModal',
          headerTitle:'', headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25} />) ,
          headerStyle:{backgroundColor:'#F4EBAA'},
          headerRight:() =>(<Feather name='shopping-bag' size={20} />)
          }}
           />

           <Stack.Screen name='cart' 
           options={{headerStyle:{backgroundColor:'white'}, 
           headerTitle:'My Cart List',
           headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25} />) 
            }}/>
          
           <Stack.Screen name='burgers' 
           options={{headerStyle:{backgroundColor:'white'}, 
           headerTitle:'My Cart List',
           headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25} />) 
            }}/>
          
           <Stack.Screen name='pizzas' 
           options={{headerStyle:{backgroundColor:'white'}, 
           headerTitle:'My Cart List',
           headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25} />) 
            }}/>
           
           <Stack.Screen name='drinks' 
           options={{headerStyle:{backgroundColor:'white'}, 
           headerTitle:'My Cart List',
           headerLeft:()=>(<Ionicons 
            onPress={()=> router.back()}
            name='chevron-back' size={25} />) 
            }}/>
        </Stack>
      </ThemeProvider>
    </>
  );
}
