import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';

const Drawer = createDrawerNavigator();


export default function DrawerNav({navigation}) {


  const logout = () => {
    navigation.navigate('Login')
  }
  

    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Logout" component={logout} />
        </Drawer.Navigator>
      );
}