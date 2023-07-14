import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import Animated, {FadeInDown} from 'react-native-reanimated';

export const ListItem = ({title, icon, value, n}) => {
  return (
    <Animated.View entering={FadeInDown.delay(n)} style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </Animated.View>
  );
};

ListItem.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    paddingHorizontal: 5,
    color: '#FFFFFF',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    color: '#FFFFFF',
  },
  icon: {
    width: 25,
    height: 25,
    margin: 5,
  },
});
