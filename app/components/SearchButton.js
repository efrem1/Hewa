import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export const SearchButton = ({onPress}) => {
  return (
    <TouchableNativeFeedback onPress={onPress} style={{width: 100}}>
      <View style={styles.container}>
        <Image style={styles.icon} source={require('asset/search.png')} />
        <Text style={styles.title}>Search</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFA500',
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    borderRadius: 8,
    elevation: 7,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'center',
  },
  title: {
    color: '#ffffff',
  },
});
