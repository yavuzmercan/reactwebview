import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Urunler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:4, title: "Reçel", image:"https://app.toptankoyurunleri.com/images/katrecel.jpg"},
        {id:2, title: "Turşu", image:"https://app.toptankoyurunleri.com/images/kattursu.jpg"},
        {id:10, title: "Pekmez", image:"https://app.toptankoyurunleri.com/images/katpekmez.jpg"} ,
        {id:16, title: "Marmelat", image:"https://app.toptankoyurunleri.com/images/katmarmelat.jpg"} ,
        {id:11, title: "Kahvaltılık", image:"https://app.toptankoyurunleri.com/images/katkahvalti.jpg"} ,
        {id:18, title: "Ekşi", image:"https://app.toptankoyurunleri.com/images/kateksi.jpg"} ,
        {id:6, title: "Salça", image:"https://app.toptankoyurunleri.com/images/katsalca.jpg"} ,
        {id:20, title: "Salamura", image:"https://app.toptankoyurunleri.com/images/katsalamura.jpg"} ,
        {id:21, title: "Sirke", image:"https://app.toptankoyurunleri.com/images/katsirke.jpg"} ,
        {id:17, title: "İçecek",image:"https://app.toptankoyurunleri.com/images/katicecek.jpg"} ,
        {id:19, title: "Bitkisel",image:"https://app.toptankoyurunleri.com/images/katbitkisel.jpg"} ,
        {id:3, title: "Sabun",image:"https://app.toptankoyurunleri.com/images/katsabun.jpg"} ,
      ]
    };
  }

  clickEventListener(item) {
    this.props.navigation.navigate('Kategori',{id:item.id});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerbar}>
          <Text style={styles.pagetitle}>Ürünler</Text>
        </View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={3}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
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

  container:{
    flex:1,
  },
  list: {
    paddingHorizontal: 5,
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '28%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 80,
    width: 80,
    alignSelf:'center'
  },
  title:{
    fontSize:13,
    flex:1,
    alignSelf:'center',
    color:"#696969",
    fontWeight: 'bold'
  },
});   
