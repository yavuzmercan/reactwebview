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

export default class Pekmez extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        
      ]
    };
    
  }

  clickEventListener(item) {
    this.props.navigation.navigate('UrunDetay');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerbar}>
          <Text style={styles.pagetitle}>Sabun</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.card} onPress={()=> this.props.navigation.navigate('Urundetay', {id:85}) }>
          <Text style={{color:'#000', padding:10,fontSize:15}}>Ankara</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.card} onPress={()=> this.props.navigation.navigate('Urundetay', {id:47}) }>
        <Text style={{color:'#000', padding:10,fontSize:15}}> İstanbul</Text>
          </TouchableOpacity>
        </View>

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
