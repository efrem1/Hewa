import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {BackgroundWrapper} from '../components/BackgroundWrapper';

export const NavigationScreen = () => {
  return (
    <BackgroundWrapper style={styles.container}>
      <Text style={styles.title}>
        I did't understand the design going back by bottom tab?
      </Text>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});
