import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, StyleSheet, Text, Image, useColorScheme, Button, TouchableOpacity, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { SliderBox } from 'react-native-image-slider-box';

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                <View style={styles.container}>
                <View style={styles.headerbar}>
                <Text style={styles.pagetitle}>Hakkımızda</Text>
                </View>
                <View style={styles.containeric}>
                <Text style={styles.text}>
                Bizler Mersin Silifke ilçesinde geleneksel yöntemlerle, hiçbir katkı maddesi eklemeden reçel, turşu, marmelat, pekmez, ekşi, salça üretiyoruz. Ürünlerimizi mevsiminde taze toplanmış meyve ve sebzelerle hazırlıyoruz. 
                </Text>
                <Text style={styles.text}>
                Özellikle büyük şehirlerde yaşayan insanlar doğal ve katkısız ürünlere ulaşmada büyük bir sorun yaşıyorlar. Bu sebeple doğal ürün satışı yapan mağazaların sayısı oldukça artmakta. Fakat müşterilerine lezzetli ürün satmak isteyen firmalar için toptan ürün tedarik edebilecekleri alanlar oldukça az. Toptan Köy Ürünleri olarak biz bu boşluğu doldurmak için bir yola çıktık.
                </Text>
                <Text style={styles.text}>
                Sizde bu lezzetli ürünleri toptan fiyatına satın almak ve müşterilerinize ulaştırmak isterseniz sitemize ücretsiz olarak üye olabilirsiniz. Toptan Köy Ürünleri olarak bizler sizlere hızlı ve güvenli hizmet verebilmek için her zaman buradayız. 
                </Text>
                <Text style={styles.text}>
                Toptan Köy Ürünleri sitesini nasıl kullanabilirsiniz?
                </Text>
                <Text style={styles.text}>
                Öncelikle sitemize üye olun. Üyelik tamamen ücretsizdir. Üye formunu doldurduktan sonra üyeliğinizi aktif edeceğiz ve daha sonra size bir bilgi maili göndereceğiz. 
                </Text>
                <Text style={styles.text}>
                Daha sonra üye girişi sayfasından email adresiniz ve şifreniz ile giriş yaparak, tüm ürünlerimizi fiyatları ile beraber görebilir ve siparişinizi geçebilirsiniz.
                </Text>
                <Text style={styles.text}>
                Eğer bir sorunuz varsa lütfen bizi arayın:  0850 441 0963
                </Text>
                <Text style={styles.text}>
                Birlikte çalışmak dileği ile,
                </Text>
                </View>
                </View>
                </ScrollView>

            </SafeAreaView>
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
        backgroundColor: '#fff',
        marginTop:0,
        
      },

      containeric: {
        width:"90%",
        flex:1,
        alignSelf:"center",
      },

    text: {
      fontSize: 14,
      color: '#000',
      marginBottom: 10,
    },
});   
