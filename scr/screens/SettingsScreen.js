import React from 'react';
import { View, StyleSheet } from 'react-native';
import PickerField from '../components/PickerField';
import SetButton from '../components/SetButton';

const SettingsScreen =()=>{
    return(
        <View style={styles.container}>
            <PickerField
                label="тема"
                options={[
                    { label: 'Cветлая', value: 'light' },
                    { label: 'Темная', value: 'dark' },
                ]}
            />
            <SetButton
                title="сохранить"
                onPress={''}/>

        </View>

    );
}; 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  list: {
    flex: 1,
    paddingBottom: 40, 
  },
  button: {
    marginTop: 10,
  },
});

export default SettingsScreen;
