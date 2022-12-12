import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const {height, width} = Dimensions.get('window');
const QRCScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#c3c5c9"
      />
      <View style={styles.headerWrapper}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo
            name="chevron-thin-left"
            size={25}
            color="black"
            style={{marginRight: 10, fontWeight: '600'}}
            onPress={() => navigation.goBack()}
          />
          <Text style={{fontSize: 22, color: 'black', fontWeight: '600'}}>
            Scan Code
          </Text>
        </View>
      </View>

      <View style={styles.mainWrapper}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderLeftWidth: 4,
              borderLeftColor: '#5c4cdb',
              borderTopLeftRadius: 20,
              borderTopWidth: 4,
              borderTopColor: '#5c4cdb',
              width: 40,
              height: 40,
              alignItems: 'center',
              marginRight: 160,
            }}></View>
          <View
            style={{
              borderRightWidth: 4,
              borderRightColor: '#5c4cdb',
              borderTopRightRadius: 20,
              borderTopWidth: 4,
              borderTopColor: '#5c4cdb',
              width: 40,
              height: 40,
              alignItems: 'center',
            }}></View>
        </View>
        <Image source={require('../assets/qr.jpg')} style={styles.image} />
        <View
          style={{
            backgroundColor: 'white',
            width: 200,
            height: 5,
            position: 'absolute',
            top: 380,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderLeftWidth: 4,
              borderLeftColor: '#5c4cdb',
              borderBottomLeftRadius: 20,
              borderBottomWidth: 4,
              borderBottomColor: '#5c4cdb',
              width: 40,
              height: 40,
              alignItems: 'center',
              marginRight: 160,
            }}></View>
          <View
            style={{
              borderRightWidth: 4,
              borderRightColor: '#5c4cdb',
              borderBottomRightRadius: 20,
              borderBottomWidth: 4,
              borderBottomColor: '#5c4cdb',
              width: 40,
              height: 40,
              alignItems: 'center',
            }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#c3c5c9',
    opacity: 0.6,
  },
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c3c5c9',
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    position: 'relative',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#c3c5c9',
  },
});
export default QRCScreen;
