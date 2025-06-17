import React from 'react';
import { SectionList, View, Button, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AddNewExpenses=()=>
{
    const navigation = useNavigation();
    return(

        <View>
            <Text>Введите ваши новые траты</Text>
            <TextInput></TextInput>
        </View>
    )
}
export default AddNewExpenses;