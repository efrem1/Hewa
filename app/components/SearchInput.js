import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
export const SearchInput = ({value, onChangeText, onSubmitEditing}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter city to search"
      placeholderTextColor="#FFFFFF"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

SearchInput.prototype = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 10,
    width: 250,
    borderRadius: 8,
    borderColor: '#FFFFFF',
    paddingHorizontal: 8,
    color: '#FFFFFF',
  },
});
