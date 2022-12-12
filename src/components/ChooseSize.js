import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {dynamicSize} from '../utils/dynamicSize';

const ChooseSize = ({vertical, mb, list, onPress, selectedSize, label}) => {
  return (
    <View
      style={{
        flexDirection: vertical ? 'column' : 'row',
        alignItems: vertical ? 'baseline' : 'center',
        marginTop: dynamicSize(16),
      }}>
      <Text
        style={[
          styles.headerText,
          {
            marginBottom: mb ? mb : 0,
          },
        ]}>
        {label}
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {list &&
          list.map((size_item, size_index) => {
            return (
              <TouchableOpacity
                onPress={() => onPress(size_index)}
                key={size_index}>
                <View
                  key={size_index}
                  style={{
                    height: dynamicSize(50),

                    width: dynamicSize(80),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: dynamicSize(20),
                    backgroundColor:
                      selectedSize == size_item ? '#16268D' : '#F3F5F9',
                    marginLeft: dynamicSize(10),
                  }}>
                  <Text
                    style={[
                      styles.sizeText,
                      {
                        color:
                          selectedSize == size_item ? '#FFFFFF' : '#8D92A3',
                      },
                    ]}>
                    {size_item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: dynamicSize(14),
    fontWeight: '500',
    color: '#8D92A3',
    marginRight: dynamicSize(20),
  },
  sizeText: {
    fontSize: dynamicSize(14),
    fontWeight: '700',
  },
});

export default ChooseSize;
