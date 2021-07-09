import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button, TextInput, TouchableHighlight, FlatList, TouchableOpacity, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';

function Item({ item }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item.link)}}>
    <View style={styles.listItem}>
      <Image source={{uri:item.image}}  style={{width:40, height:40,borderRadius:30}} />
      <View style={{alignItems:"center",flex:1,paddingTop: 10, textAlign: "left"}}>
        <Text style={{color: '#000', fontSize:16,}}>{item.title}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default class App extends React.Component {
  state = {
    data:[
            {id:1, title: "Üyelik Bilgilerim", image:"https://app.toptankoyurunleri.com/images/ico_uyeuye.png", link:"Hakkimizda"},
            {id:2, title: "Favori Listem", image:"https://app.toptankoyurunleri.com/images/ico_uyefavori.png", link:"Hakkimizda"},
            {id:3, title: "Sipariş Takibi", image:"https://app.toptankoyurunleri.com/images/ico_uyetakip.png", link:"Hakkimizda"} ,
            {id:4, title: "Sepetim", image:"https://app.toptankoyurunleri.com/images/ico_uyesepet.png", link:"Hakkimizda"} ,
            {id:10, title: "Siparişlerim", image:"https://app.toptankoyurunleri.com/images/ico_uyesiparisler.png", link:"Hakkimizda"} ,
            {id:6, title: "Hesap Bilgileri", image:"https://app.toptankoyurunleri.com/images/ico_uyebanka.png", link:"Hakkimizda"} ,
            {id:5, title: "Havale Bildirim Formu", image:"https://app.toptankoyurunleri.com/images/uyeform.png", link:"Hakkimizda"} ,
            {id:7, title: "Ödeme Seçenekleri", image:"https://app.toptankoyurunleri.com/images/icos_uyeodeme.png", link:"Hakkimizda"} ,
            {id:8, title: "Sıkça Sorular Sorular", image:"https://app.toptankoyurunleri.com/images/icos_uyesss.png", link:"Hakkimizda"} ,
            {id:9, title: "Hakkımızda", image:"https://app.toptankoyurunleri.com/images/uye_hak.png", link:"Hakkimizda"} ,

          ]
      }

      clickEventListener(item) {
        this.props.navigation.navigate('Hakkimizda');
      }


      render(){
        return (
          <View style={styles.container}>
            <View style={styles.headerbar}>
          <Text style={styles.pagetitle}>Ürünler</Text>
        </View>
        
            <FlatList
              style={{flex:1}}
              data={this.state.data}
              renderItem={({ item }) => <Item item={item}/>}
            />
          
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({

      headerbar: {
        height: 55, 
        backgroundColor: "#f27a1a",
        alignItems:'center',
        justifyContent:"center",
        paddingVertical: 15,
        marginBottom: 10,
      },
    
      pagetitle:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#fff",
        fontWeight: 'bold',
      },

      container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:0
      },
      listItem:{
        margin:5,
        padding:5,
        backgroundColor:"#FFF",
        width:"90%",
        flex:1,
        alignSelf:"center",
        textAlign: "left",
        flexDirection:"row",
        borderRadius:5
      }
    });