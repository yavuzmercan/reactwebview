import React, {Component} from 'react';
import {SafeAreaView,   TouchableOpacity,ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button, BackHandler, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';


export default class UrunDetay extends Component {
    constructor(props) {
        super(props);
        
        this.state = {}
      }
      
    render() {

        const {route,navigation} = this.props;
        const {params} = route;
    
        return(
            <View style={styles.container}>
            <View style={styles.headerbar}>
                <Text style={styles.pagetitle}>{params.title}</Text> 
            </View>
            <WebView
            cacheEnabled={false}
            source={{ uri: 'https://app.toptankoyurunleri.com/urun/'+params.seotitle+'/'+params.id}}
            style={{ marginTop: 55 }}
            />
            </View>
        )

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
