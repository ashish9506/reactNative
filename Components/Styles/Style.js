import React from 'react';
import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    LoginContainer: {
      flex: 1,
     justifyContent:'center',
     alignItems:'center',
    },
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 10,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        marginLeft:36
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      
      },
    //   row: {
    //     marginTop: 20,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //   },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      header:{
        width: '100%',
        height: '100%',
       

    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        letterSpacing:1,
    }
  });

export default Style;