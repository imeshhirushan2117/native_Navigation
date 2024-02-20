import React from 'react'
import Home from './src/pages/Home/Home'
import LogIn from './src/pages/LogIn/LogIn'
import About from './src/pages/About/About'

import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (

    <NavigationContainer>
      {/* <Home />
      <LogIn /> */}
      <About />
    </NavigationContainer>
  )
}