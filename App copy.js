import React, {Component} from 'react';

import {SafeAreaView, ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import Urunler from './urun';
import Home from './home';
import Tursu from './tursu';
import Recel from './recel';
import Pekmez from './pekmez';
import Marmelat from './marmelat';
import Kahvaltilik from './kahvaltilik';
import Eksi from './eksi';
import Salca from './salca';
import Salamura from './salamura';
import Sirke from './sirke';
import Icecek from './icecek';
import Sabun from './sabun';
import Favoriler from './favoriler';
import Sepet from './sepet';
import Uye from './uye';
import {styles} from './src/shared/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MyTabBar({ state, descriptors, navigation }) {
    return (
       
        <View style={styles.altsabit}>
            <View style={styles.altsabitic}>
            
            {state.routes.map((route, index) => {

            console.log('click out:',route); 

                if(route.name==="Tursu" || route.name==="Recel" || route.name==="Pekmez" || route.name==="Marmelat" || route.name==="Kahvaltilik" || route.name==="Eksi" || route.name==="Salca" || route.name==="Salamura" || route.name==="Sirke" || route.name==="Icecek" || route.name==="Sabun")
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
console.log('click in:',event);
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

                let styleReq = styles.sol1;
                if(index == 1)
                    styleReq = styles.sol2;
                else if(index == 2)
                    styleReq = styles.sol3;
                else if(index == 3)
                    styleReq = styles.sol4;
                else if(index == 4)
                    styleReq = styles.sol5;
                else
                    styleReq = styles.sol1;

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
                        style={styleReq}
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
                    <Tab.Screen name="Tursu" component={Tursu} />
                    <Tab.Screen name="Recel" component={Recel} />
                    <Tab.Screen name="Pekmez" component={Pekmez} />
                    <Tab.Screen name="Marmelat" component={Marmelat} />
                    <Tab.Screen name="Kahvaltilik" component={Kahvaltilik} />
                    <Tab.Screen name="Eksi" component={Eksi} />
                    <Tab.Screen name="Salca" component={Salca} />
                    <Tab.Screen name="Salamura" component={Salamura} />
                    <Tab.Screen name="Sirke" component={Sirke} />
                    <Tab.Screen name="Icecek" component={Icecek} />
                    <Tab.Screen name="Sabun" component={Sabun} />
                </Tab.Navigator>
            </NavigationContainer>

        </>
    )
}



export default App;




