import React from 'react';
import {StyleSheet} from 'react-native';
import {RestultComp, BackgroundWrapper, EmptyState} from 'components';

export const ResultScreen = ({data}) => {
  if (!data) {
    return (
      <BackgroundWrapper style={styles.container}>
        <EmptyState />
      </BackgroundWrapper>
    );
  }
  return <RestultComp data={data} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#224496',
  },
});
