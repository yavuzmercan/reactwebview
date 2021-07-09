import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';



export default class Urunler extends Component {
    render() {
        return  <WebView
            source={{ uri: 'https://app.toptankoyurunleri.com/bayigirisi' }}
            style={{ marginTop: 0 }}
        />
        
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      
  },

  headerbar: {
    height: 55, 
    backgroundColor: "#fff",
    flex:1,
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingBottom: 15,
    paddingTop: 15,
  },

  pagetitle:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#000",
    fontWeight: 'bold',
  },
  
});   
