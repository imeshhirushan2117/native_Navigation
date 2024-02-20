import React from 'react'
import Home from './src/pages/Home/Home'
import LogIn from './src/pages/LogIn/LogIn'
import About from './src/pages/About/About'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
    </NavigationContainer>
  )
}