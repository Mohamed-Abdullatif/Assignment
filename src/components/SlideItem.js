import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  console.log('object', item);
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Animated.Image
          source={item.url}
          resizeMode="contain"
          style={[
            styles.image,
            {
              transform: [
                {
                  translateY: translateYImage,
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  mainContainer: {
    height: height * 0.3,
    width: width * 0.9,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    width,
    height,
    alignItems: 'center',
  },
  image: {
    // flex: 0.4,
    width: '100%',
    height: 200,
  },
});
