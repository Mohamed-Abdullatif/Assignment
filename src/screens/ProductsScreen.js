/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import Card from '../components/Card';

const {height, width} = Dimensions.get('window');

const baseUrlFiles = 'https://develop.yeshtery.com/files/';

const ProductsScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://api-dev.yeshtery.com/v1/yeshtery/products')
      .then(response => {
        let productData = response.data;
        productData = productData['products'];
        setProducts(productData);
      });
  }, []);

  const _renderItem = ({item}) => {
    let imgUrl = baseUrlFiles + item.image_url;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetailsScreen', {id: item.id})
        }>
        <Card
          style={{
            flex: 1,
            marginTop: 5,
            width: '100%',
            height: 163,
            backgroundColor: 'white',
            borderRadius: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View
            style={{
              width: '40%',
              height: '100%',
            }}>
            <Image
              source={{uri: `${imgUrl}`}}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View
            style={{
              width: '59%',
              height: '100%',
              flex: 1,
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginVertical: 20,
              }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 12,
              }}>
              <Image
                source={require('../assets/QRCode.png')}
                style={{height: 23, width: 23, marginRight: 6}}
              />
              <Text style={{marginRight: 18, color: '#70d1da'}}>
                {item.brand_id}
              </Text>
              <Image
                source={require('../assets/price.png')}
                style={{height: 23, width: 23, marginRight: 6}}
              />
              <Text style={{color: '#70d1da'}}>{item.price}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.png')}
        style={{width: '100%'}}
      />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        translucent={true}
        backgroundColor="#31007e"
      />
      <View style={styles.headerWrapper}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/arrow.png')}
            style={{height: 16, width: 9, marginRight: 16}}
          />

          <Text style={{color: 'white', fontSize: 22}}>Scan Products</Text>
        </View>
        <View>
          <Image
            source={require('../assets/bag.png')}
            style={{height: 20, width: 16, marginRight: 6}}
          />
        </View>
      </View>
      <View style={styles.productsWrapper}>
        <FlatList
          data={products}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
        />
      </View>
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
    minHeight: height,
    backgroundColor: '#fff',
    marginTop: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
export default ProductsScreen;
