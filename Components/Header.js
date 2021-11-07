import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Style from './Styles/Style';

export default function Header(){
    return(
        <View style={Style.header}>
            
            <View>
            <Text style={Style.headerText}>Wellhest</Text>
            
            </View>
            
        </View>
        
    )
}
