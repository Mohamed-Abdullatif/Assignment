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
} from 'react-native';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Card from '../components/Card';

const {height, width} = Dimensions.get('window');
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
              source={require('../assets/watch7.jpeg')}
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MatIcon
                name="qrcode-scan"
                size={29}
                color="#70d1da"
                style={{marginRight: 8}}
              />
              <Text style={{marginRight: 18, color: '#70d1da'}}>
                {item.brand_id}
              </Text>
              <FontAwesome5
                name="file-invoice-dollar"
                size={29}
                color="#70d1da"
                style={{marginRight: 8}}
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
      <StatusBar
        barStyle="light-content"
        hidden={false}
        translucent={true}
        backgroundColor="#31007e"
      />
      <View style={styles.headerWrapper}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo
            name="chevron-thin-left"
            size={28}
            color="white"
            style={{marginRight: 10}}
          />
          <Text style={{color: 'white', fontSize: 22}}>Scan Products</Text>
        </View>
        <View>
          <SimpleLineIcons name="bag" size={28} color="white" />
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
