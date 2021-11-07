import React from 'react';
import HomeScreen from './HomeScreen';
import BeautyScreen from './BeautyScreen';
import HomeServicesScreen from './HomeServicesScreen';
import FitnessScreen from './FitnessScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Header from './Header';

//HomeScreen or Explore Screen
const HomeStack = createStackNavigator();

const HomeStackScreen=({navigation})=>{
 
    return(
        <HomeStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#b33939',
            },
          }}
        >
          <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerTitle: ()=><Header/>,
  
            headerLeft:()=>(
              <Ionicons style={{marginLeft:20}}name="md-menu" size={25} 
             
              color="#fff"
              onPress={()=>navigation.openDrawer()}>
              </Ionicons>
            ) 
          }}
          />
        </HomeStack.Navigator>
    
    );
  };

  //Beauty Screen
  const BeautyStack= createStackNavigator();

  const BeautyScreenStack=({navigation})=>{
      return(
          <BeautyStack.Navigator
          screenOptions={{
            headerStyle: {
            backgroundColor: '#b33939',
            },
            
          }}
          >
            <BeautyStack.Screen
            name="Beauty"
            component={BeautyScreen}
            options={{ 
            headerTitle: ()=><Header/>,
            headerLeft:()=>(
              <Ionicons style={{marginLeft:20}} name="md-menu" size={25} 
             
              color="#fff"
              onPress={()=>navigation.openDrawer()}>
              </Ionicons>
            ) 
          }}
          />

          </BeautyStack.Navigator>
      )
  }
  //Fitness Screen
  const FitnessStack= createStackNavigator();
  const FitnessStackScreen=({navigation})=>{
    return(
      <FitnessStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:'#b33939',
          },

        }}
        >
          <FitnessStack.Screen
            name="Fitness"
            component={FitnessScreen}
            options={{ 
              headerTitle: ()=><Header/>,
  
            headerLeft:()=>(
              <Ionicons style={{marginLeft:20}}name="md-menu" size={25} 
             
              color="#fff"
              onPress={()=>navigation.openDrawer()}>
              </Ionicons>
            ) 
          }}

            />
      </FitnessStack.Navigator>
    )
  }

  //Home Services
  const HomeServiceStack= createStackNavigator();
  const HomeServiceStackScreen=({navigation})=>{
    return(
      <HomeServiceStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:'#b33939',
          },

        }}
        >
          <HomeServiceStack.Screen
            name="Fitness"
            component={HomeServicesScreen}
            options={{ 
              headerTitle: ()=><Header/>,
  
            headerLeft:()=>(
              <Ionicons style={{marginLeft:20}}name="md-menu" size={25} 
             
              color="#fff"
              onPress={()=>navigation.openDrawer()}>
              </Ionicons>
            ) 
          }}

            />
      </HomeServiceStack.Navigator>
    )
  }

const Tab = createMaterialBottomTabNavigator();
const TabScreen=()=>{
    return(
        <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      
        >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor:'#b33939',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Beauty"
        component={BeautyScreenStack}
        options={{
          tabBarLabel: 'Beauty',
          tabBarColor:'#b33939',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-brush" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Fitness"
        component={FitnessStackScreen}
        options={{
          tabBarLabel: 'Fitness',
          tabBarColor:'#b33939',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-fitness" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="HomeServices"
        component={HomeServiceStackScreen}
        options={{
          tabBarLabel: 'Home Services',
          tabBarColor:'#b33939',
          tabBarIcon: ({ color }) => (
            <Icon name="home-map-marker"
            color={color}
            size={26}
            />
          ),
        }}
      />
      </Tab.Navigator>

    )
}
export default TabScreen;