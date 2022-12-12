import React from 'react';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const dynamicSize = size => {
  const percentage = (size / 850) * 100;
  return (percentage * height) / 100;
};

export const screenWidth = width;
