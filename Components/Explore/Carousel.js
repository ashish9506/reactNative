import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet

} from 'react-native';

class Carousel extends Component {
    render()
    {
        return(
            <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
                    <View style={{flex:2}}>
                      <Image
                       source={{
                        uri:'https://cdn.pixabay.com/photo/2016/07/14/08/39/hairdressing-1516352__340.jpg'
                        }}
                      style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
                    </View>
                    <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                      <Text>Home</Text>

                    </View>
            </View>
        );
    }
}
export default Carousel;