import React from 'react';
import {View } from 'react-native';
import Style from './Styles/Style';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch

} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerScreen=(props)=>{
    const [isDarkTheme,setIsDarkTheme]=React.useState(false);
    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme);
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}> 
                <View style={Style.drawerContent}>
                    <View style={Style.userInfoSection}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:15}}>
                            <Avatar.Image
                                source={{
                                    uri:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                                }}
                             
                                size={80}
                            />
                            <View style={{flexDirection:'column'}}>
                                <Title style={Style.title}>UserName</Title>
                                <Caption style={Style.caption}>username@gmail.com</Caption>
                             </View>
                        </View>
                        {/* <View style={Style.row}>
                            <View style={Style.section}>
                                <Paragraph style={[Style.paragraph,Style.caption]}>80</Paragraph>
                                <Caption style={Style.caption}>Following</Caption>
                            </View>
                            <View style={Style.section}>
                                <Paragraph style={[Style.paragraph,Style.caption]}>100</Paragraph>
                                <Caption style={Style.caption}>Followers</Caption>
                            </View>

                        </View> */}
                        <Drawer.Section style={Style.drawerSection}>
                        <DrawerItem
                            icon={({color,size})=>(
                            <Icon name="account-edit"
                            color={color}
                            size={size}
                            />
                            )}
                            label="Account & Settings"
                            onPress={()=>{}}
                        />
                        
                        <DrawerItem
                            icon={({color,size})=>(
                            <Icon name="calendar-multiple-check"
                            color={color}
                            size={size}
                            />
                            )}
                            label="Your Appointments"
                            onPress={()=>{}}
                        />
                      
                          <DrawerItem
                            icon={({color,size})=>(
                            <Icon name="history"
                            color={color}
                            size={size}
                            />
                            )}
                            label="Appointments History"
                            onPress={()=>{}}
                        />

                           <DrawerItem
                            icon={({color,size})=>(
                            <Icon name="cellphone-text"
                            color={color}
                            size={size}
                            />
                            )}
                            label="Feedback & Support"
                            onPress={()=>{}}
                        />

                         <DrawerItem
                            icon={({color,size})=>(
                            <Icon name="file-document-outline"
                            color={color}
                            size={size}
                            />
                            )}
                            label="About Wellhest"
                            onPress={()=>{}}
                        />
                        
                        
                        
                        </Drawer.Section>
                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={()=>{toggleTheme()}}>
                                <View style={Style.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme}/>
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                    </View>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={Style.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size})=>(
                        <Icon name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Logout"
                    onPress={()=>{}}
                />
            </Drawer.Section>
        </View>
    )

}
export default DrawerScreen;