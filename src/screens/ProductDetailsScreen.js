import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Slider from '../components/Slider';
import ChooseSize from '../components/ChooseSize';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
const list_sizes = ['S', 'M', 'xL', 'XXL'];

const ProductDetailsScreen = ({route, navigation}) => {
  const {id} = route.params;
  const [productDetails, setProductDetails] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    getProductDetails();
    console.log('RRRRRR', productDetails);
  }, []);

  getProductDetails = async () => {
    const url = `https://api-dev.yeshtery.com/v1/yeshtery/product/?product_id=${id}`;
    axios
      .get(url)
      .then(response => {
        setProductDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        translucent={true}
        backgroundColor="#31007e"
      />
      <View style={styles.headerWrapper}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/arrow.png')}
              style={{height: 16, width: 9, marginRight: 16}}
            />
          </TouchableOpacity>

          <Text style={{color: 'white', fontSize: 22}}>Product Details</Text>
        </View>
        <View>
          <Image
            source={require('../assets/bag.png')}
            style={{height: 20, width: 16, marginRight: 6}}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.productsWrapper}>
          <Slider />

          <View>
            <View
              style={{
                marginTop: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text style={{fontSize: 22, color: 'black'}}>
                {productDetails.name}
              </Text>
              <Text style={{fontSize: 19, color: '#31007e'}}>
                ({productDetails.price / 2} EGP)
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text style={{fontSize: 22, color: 'black'}}>
                {productDetails.p_name}
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: 'gray',
                  textDecorationLine: 'line-through',
                }}>
                {productDetails.price} EGP
              </Text>
            </View>
          </View>
          <View style={{marginTop: 13, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 13,
                color: 'gray',
              }}>
              {productDetails.description}
            </Text>
          </View>
          <View style={{marginTop: 17, paddingHorizontal: 20}}>
            <Text style={{color: '#1f54ce', fontSize: 16}}>Color</Text>
            <View style={{flexDirection: 'row', marginTop: 13}}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  backgroundColor: '#aa4325',
                  marginRight: 7,
                }}></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  backgroundColor: '#100d0c',
                  marginRight: 7,
                }}></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  backgroundColor: '#26c184',
                  marginRight: 7,
                }}></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  backgroundColor: '#917f72',
                  marginRight: 7,
                }}></View>
            </View>
          </View>
          <View style={{marginTop: 17, paddingHorizontal: 20}}>
            <Text style={{color: '#1f54ce', fontSize: 16}}>Size</Text>
          </View>
          <View>
            <ChooseSize
              selectedSize={selectedSize}
              list={list_sizes}
              onPress={i => setSelectedSize(list_sizes[i])}
            />
          </View>
          <View style={{marginTop: 25}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/QRCode.png')}
                  style={{height: 27, width: 27, marginRight: 12}}
                />
                <View>
                  <Text
                    style={{color: '#1f54ce', fontSize: 16, fontWeight: '400'}}>
                    scan
                  </Text>
                  <Text style={{fontWeight: '400', fontSize: 16}}>
                    & get 100 points
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('QRCScreen')}>
                  <LinearGradient
                    colors={[
                      '#00e8db',
                      '#00ccf1',
                      '#00abff',
                      '#0083ff',
                      '#5c4cdb',
                    ]}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Scan</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/QRCode.png')}
                  style={{height: 27, width: 27, marginRight: 12}}
                />
                <View>
                  <Text
                    style={{color: '#1f54ce', fontSize: 16, fontWeight: '400'}}>
                    scan
                  </Text>
                  <Text style={{fontWeight: '400', fontSize: 16}}>
                    & get 100 points
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('QRCScreen')}>
                  <LinearGradient
                    colors={[
                      '#00e8db',
                      '#00ccf1',
                      '#00abff',
                      '#0083ff',
                      '#5c4cdb',
                    ]}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Scan</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#31007e',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  productsWrapper: {
    flex: 1,
    minHeight: height,
    backgroundColor: '#fff',
    marginTop: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default ProductDetailsScreen;
