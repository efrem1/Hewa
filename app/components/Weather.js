import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getIcon} from 'asset/weather/getIcon';
import Animated, {FadeInDown} from 'react-native-reanimated';

export const Weather = ({temp, weathers}) => {
  const weather = weathers[0];

  function kelvinToCelsius(kelvin) {
    var celsius = kelvin - 273.15;
    return celsius.toFixed(0);
  }
  return (
    <View style={styles.contaner}>
      <Animated.View entering={FadeInDown.delay(600)} style={styles.holder}>
        <Image style={styles.icon} source={getIcon(weather.icon)} />
        <Text style={styles.temp}>{kelvinToCelsius(temp)}</Text>
        <Text style={styles.centigrade}>°C</Text>
      </Animated.View>
      <Animated.Text
        entering={FadeInDown.delay(800)}
        style={styles.description}>
        {weather.description}
      </Animated.Text>
      <Animated.Text entering={FadeInDown.delay(900)} style={styles.main}>
        {weather.main}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
    alignItems: 'center',
    margin: 15,
  },
  holder: {
    alignSelf: 'center',
    paddingTop: 40,
    paddingHorizontal: 70,
  },
  temp: {
    fontSize: 90,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 80,
    height: 80,
  },
  centigrade: {
    fontSize: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
    color: '#FFFFFF',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    margin: 5,
  },
  main: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18,
  },
});
