import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerField = ({ label, selectedValue, onValueChange, options }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.picker}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {options.map((opt) => (
          <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
        ))}
      </Picker>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 2,
    borderColor: '#add8e6',
    borderRadius: 6,
    height: 50,
  },
  
});

export default PickerField;
