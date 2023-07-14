import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const EmptyState = () => {
  return <Text style={styles.title}>Empty!</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '700',
  },
});
