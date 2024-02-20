import React from 'react'
import Home from './src/pages/Home/Home'
import LogIn from './src/pages/LogIn/LogIn'
import About from './src/pages/About/About'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './src/Component/Drawer/DrawerNav';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }}/>
      <Stack.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }}/> 
    </Stack.Navigator>
    </NavigationContainer>
  )
}