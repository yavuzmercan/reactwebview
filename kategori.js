import { NavigationHelpersContext } from '@react-navigation/core';
import React, { Component } from 'react';
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

import { getData } from './loadData';

export default class Pekmez extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshFlag: Boolean = false,
      data: [
        // {id:281, title: "Dut Pekmezi 780 gr", image:"https://www.toptankoyurunleri.com//Uploads/Products/281/dut-pekmezi-760-gr-9020651226.JPG"},
        // {id:280, title: "Hurma Pekmezi 780 gr", image:"https://www.toptankoyurunleri.com//Uploads/Products/280/hurma-pekmezi-760-gr-4428049772.JPG"},
        // {id:3, title: "Üzüm Pekmezi 780 gr", image:"https://www.toptankoyurunleri.com//Uploads/Products/278/uzum-pekmezi-760-gr-3174869708.JPG"} ,
        // {id:4, title: "Andız Pekmezi 780 gr", image:"https://www.toptankoyurunleri.com//Uploads/Products/275/andiz-pekmezi-760-gr-7431271712.JPG"} ,
        // {id:5, title: "Harnup Pekmezi 780 Gr", image:"https://www.toptankoyurunleri.com//Uploads/Products/120/harnup-pekmezi-760-gr-5214845546.JPG"} ,
      ]
    };
    
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const { route, navigation } = this.props;
      const { params } = route;
      console.log('fetch params:', params);
      let suffix = 'Product/' + params.id;
      console.log('product:', suffix);
      getData(suffix, "GET").then(val => {
        this.setState({ data: val.data}, () => {
          console.log('state=>', this.state);
        });
        
      });
    });
    //id gelecek
    //fetch
  }

  componentWillUnmount() {
    this.setState({ data: [] }, () => {

    });
    updateState = () => this.setState({data: newData})  
    this._unsubscribe();
  }


  clickEventListener(item) {
    console.log("BU  BIR ITEM", item)
    this.props.navigation.navigate('UrunDetay', { ...item });
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
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {

            return (
              <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item) }}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{ uri: 'https://www.toptankoyurunleri.com/Uploads/Products/' + item.id + '/' + item.filename }} />
                <View style={styles.cardHeader}>
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerbar: {
    height: 55,
    backgroundColor: "#f27a1a",
    alignItems: 'center',
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10,
  },

  pagetitle: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#fff",
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    marginTop: 0,
  },
  list: {
    paddingHorizontal: 5,

  },
  listContainer: {
    alignItems: 'center'
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: "white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 150,
    width: 150,
    alignSelf: 'center'
  },
  title: {
    fontSize: 13,
    flex: 1,
    alignSelf: 'center',
    color: "#696969",
    fontWeight: 'bold'
  },
});
