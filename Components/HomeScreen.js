import * as React from 'react';
import { View, Text,ScrollView,Image,SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';
import Carousel from './Explore/Carousel';
import Style from './Styles/Style';
function HomeScreen() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={{flex:1}}>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={{flex:1, backgroundColor:'white',paddingTop:20,}}>
            <Text style={{fontSize:22,fontWeight:'700',paddingHorizontal:20}}>
              What can we help you find,UserName?
            </Text>
            <View style={{height:130,marginTop:20}}>
              <ScrollView>
                <Carousel/>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

export default HomeScreen;