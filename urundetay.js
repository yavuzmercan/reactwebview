import React, {Component} from 'react';
import {SafeAreaView,   TouchableOpacity,ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button, BackHandler, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';


export default class UrunDetay extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
         detailData:{}
        }
      }

      
      
    componentDidMount() {
        console.log('this props detail:',JSON.stringify(this.props));
        const {route,navigation} = this.props;
        const {params} = route;
        console.log('params:',params)
        this.setState({detailData:params});
        
    }
    
    render() {
        
        const {detailData} = this.state;
        console.log('deail:',this.props.navigation)
        let vw =  <Text>Loading...</Text>;
        if(detailData.id && detailData.id >0 ){
        vw =  
        <View style={styles.container}>
        <View style={styles.headerbar}>
            <Text style={styles.pagetitle}>{this.state.detailData.title}</Text> 
        </View>
        <WebView
        source={{ uri: 'https://app.toptankoyurunleri.com/urun/'+this.state.detailData.seotitle+'/'+this.state.detailData.id}}
        style={{ marginTop: 55 }}
        />
        </View>
        }
        return  vw 
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