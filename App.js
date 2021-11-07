import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './Components/LoginScreen';
import TabScreen from './Components/TabScreen';
import DrawerScreen from './Components/DrawerScreen';


const Drawer = createDrawerNavigator();
const App=()=> {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props=> <DrawerScreen {...props}/>}>
      <Drawer.Screen name="Tabs" component={TabScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default App;
