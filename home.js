import React, {Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    Button,
    TouchableOpacity,
} from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import {styles} from './src/shared/styles';
import { SliderBox } from 'react-native-image-slider-box';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('./src/assets/images/1.png'),
            require('./src/assets/images/2.png'),
            require('./src/assets/images/3.png'),
          ]
        };
      }
    render() {
        
        console.log('Burda:=>',this.props)
        return (
            <SafeAreaView>
                <ScrollView>
                <View style={styles.anaheaderbar}>
                <Image
                        source={require("./src/assets/images/applogo.png")}
                        resizeMode="contain"
                        style={{ width: 195, height: 41 }}
                    ></Image>
                </View>
                <View style={styles.anabanner}>
                <SliderBox
                images={this.state.images}
                sliderBoxHeight={215}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                />
                </View>
                
                <View style={styles.banner}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Kategori',{id:4})  }><Image
                        source={require("./src/assets/images/recel.jpg")}
                        resizeMode="contain"
                        style={{ width: '100%', height: 140}}
                    ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.banner}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Kategori',{id:10}) }><Image
                        source={require("./src/assets/images/pekmez.jpg")}
                        resizeMode="contain"
                        style={{ width: '100%', height: 140}}
                    ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.banner}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Kategori',{id:16})  }><Image
                        source={require("./src/assets/images/marmelat.jpg")}
                        resizeMode="contain"
                        style={{ width: '100%', height: 140}}
                    ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.banner}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Kategori',{id:2}) }><Image
                        source={require("./src/assets/images/tursu.jpg")}
                        resizeMode="contain"
                        style={{ width: '100%', height: 140}}
                    ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.banner}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Kategori',{id:11}) }><Image
                        source={require("./src/assets/images/kahvalti.jpg")}
                        resizeMode="contain"
                        style={{ width: '100%', height: 140}}
                    ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.banner}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Sabun') }><Image
                        source={require("./src/assets/images/sirke.jpg")}
                        resizeMode="contain"
                        style={{ width: '100%', height: 140}}
                    ></Image>
                    </TouchableOpacity>
                </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}
