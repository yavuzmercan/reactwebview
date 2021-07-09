import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import {styles} from './src/shared/styles';

export default class Home extends Component {
    render() {
        console.log('Burda:=>',this.props)
        return (
            <SafeAreaView>
                <ScrollView style={{marginBottom:60}}>
                    <View style={styles.anabanner}>
                        <Image
                            source={require("./src/assets/images/1.png")}
                            resizeMode="contain"
                            style={{ width: 425, height: 250 }}
                        ></Image>
                    </View>
                    <View style={styles.banner}>
                        <Image
                            source={require("./src/assets/images/recel.jpg")}
                            resizeMode="contain"
                            style={{ width: 415, height: 125 }}
                        ></Image>
                    </View>
                    <View style={styles.banner}>
                        <Image
                            source={require("./src/assets/images/pekmez.jpg")}
                            resizeMode="contain"
                            style={{ width: 415, height: 125 }}
                        ></Image>
                    </View>
                    <View style={styles.banner}>
                        <Image
                            source={require("./src/assets/images/marmelat.jpg")}
                            resizeMode="contain"
                            style={{ width: 415, height: 125 }}
                        ></Image>
                    </View>
                    <View style={styles.banner}>
                        <Image
                            source={require("./src/assets/images/tursu.jpg")}
                            resizeMode="contain"
                            style={{ width: 415, height: 125 }}
                        ></Image>
                    </View>
                    <View style={styles.banner}>
                        <Image
                            source={require("./src/assets/images/kahvalti.jpg")}
                            resizeMode="contain"
                            style={{ width: 415, height: 125 }}
                        ></Image>
                    </View>
                    <View style={styles.altbanner}>
                        <Image
                            source={require("./src/assets/images/sirke.jpg")}
                            resizeMode="contain"
                            style={{ width: 415, height: 125 }}
                        ></Image>
                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

