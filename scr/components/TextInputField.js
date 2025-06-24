import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputField = ({label, value, onChangeText}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
 
  label: {
    fontSize: 15,
    marginBottom: 6,
  },
  input: {
    borderWidth: 2,
    borderColor: '#add8e6',
    borderRadius: 6
  },
});

export default TextInputField;