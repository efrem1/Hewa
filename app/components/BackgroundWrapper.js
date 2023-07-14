import React from 'react';
import {View, StyleSheet} from 'react-native';
import WavyBackground from 'react-native-wavy-background';

export const BackgroundWrapper = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.overlay}>
        <WavyBackground
          height={300}
          width={1100}
          amplitude={25}
          frequency={1.2}
          offset={250}
          color="#005C97"
          bottom
        />
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224496',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#224496',
    left: 0,
    right: 0,
  },
});
