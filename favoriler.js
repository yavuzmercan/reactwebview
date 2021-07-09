import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';

export default class Urunler extends Component {
    render() {
        return  <WebView
            source={{ uri: 'https://app.toptankoyurunleri.com/uye/favoriler' }}
            style={{ marginTop: 0 }}
        />
    }
}
