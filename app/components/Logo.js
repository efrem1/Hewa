import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const Logo = () => {
  return <Image style={styles.logo} source={require('asset/logo.png')} />;
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    margin: 10,
  },
});
