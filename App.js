import React, {Component} from 'react';

import {SafeAreaView, ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import Urunler from './urunler';
import Home from './home';
import Kategori from './kategori';
import Favoriler from './favoriler';
import Sepet from './sepet';
import Uyemenu from './uyemenu';
import UrunDetay from './urundetay';
import Uye from './uye';
import Hakkimizda from './hakkimizda';
import Sabun from './sabun';
import {styles} from './src/shared/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MyTabBar({ state, descriptors, navigation }) {
    return (

        <View style={{ flexDirection: 'row',  bottom: 0, height: 60, backgroundColor: "white",}}>
            {state.routes.map((route, index) => {
               if(route.name==="Kategori" || route.name==="Uyemenu" || route.name==="UrunDetay" || route.name==="Hakkimizda" || route.name==="Sabun")
                    return ;
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let imageReq = require("./src/assets/images/tab0.jpg");
                if(index == 1)
                    imageReq = require("./src/assets/images/tab1.jpg");
                if(index == 2)
                    imageReq = require("./src/assets/images/tab2.jpg");
                if(index == 3)
                    imageReq = require("./src/assets/images/tab3.jpg");
                if(index == 4)
                    imageReq = require("./src/assets/images/tab4.jpg");

                
 
                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{flex:1, alignItems:'center', height: 60}}
                    >
                        <Image style={styles.footerimg}
                        source={imageReq}
                        resizeMode="contain"></Image>
                        <Text style={styles.footertext}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: () => React$Node = () => {

    return (
        <>

<NavigationContainer>
                <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                    <Tab.Screen name="Ana Sayfa" component={Home} />
                    <Tab.Screen name="Urunler" component={Urunler} />
                    <Tab.Screen name="Favoriler" component={Favoriler} />
                    <Tab.Screen name="Uye" component={Uye} />
                    <Tab.Screen name="Sepet" component={Sepet} />
                    <Tab.Screen name="Kategori" component={Kategori} />
                    <Tab.Screen name="Uyemenu" component={Uyemenu} />
                    <Tab.Screen name="UrunDetay" component={UrunDetay} />
                    <Tab.Screen name="Hakkimizda" component={Hakkimizda} />
                    <Tab.Screen name="Sabun" component={Sabun} />
                </Tab.Navigator>
            </NavigationContainer>

        </>
    )
}



export default App;




