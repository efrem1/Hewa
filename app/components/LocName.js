import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import Animated, {FadeInDown} from 'react-native-reanimated';
export const LocName = ({name}) => {
  return (
    <Animated.View entering={FadeInDown.delay(400)} style={styles.container}>
      <Image source={require('asset/location.png')} />
      <Text style={styles.title}>{name}</Text>
    </Animated.View>
  );
};

LocName.prototype = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    margin: 15,
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '700',
    color: 'white',
  },
});
