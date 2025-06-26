import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import TextInputField from '../components/TextInputField';
import PickerField from '../components/PickerField';
import SetButton from '../components/SetButton';
import { useNavigation } from '@react-navigation/native';
import storage from '../storage/Storage';
import { useMMKVString, useMMKVObject } from 'react-native-mmkv';

const AddNewExpensesScreen = () => {

const [name, setName] = useMMKVString('name');
const [category='food', setCategory]=useMMKVString('category');
const [cost, setCost] =useMMKVString('cost');
const [currency='ru-RU', setCurrency] = useMMKVString('currency');

const [expenses, setExpenses] = useMMKVObject('expenses'); 

const navigation = useNavigation();

  const saveExpense=()=>{

   
    if(name.trim()!='' && cost.trim()!='')
    {
      const newExpense = {
        id: Date.now().toString(),
        name: name.trim(),
        category: category.trim(),
        cost: cost,
        currency: currency,
        date: new Date().toLocaleDateString('ru-RU'),
      };
     
      const dateExpenses = newExpense.date;
     
      let curExpenses = expenses ? expenses : [];

      let expense = curExpenses.find((s) => s.title == dateExpenses);
      if (!expense) {
        expense = { title: dateExpenses, data: [] };
        curExpenses.push(expense);
      }
      expense.data.push(newExpense);

      setExpenses(curExpenses);
      Alert.alert('Транзакция успешно добавлена');
      setName('');
      setCategory('food');
      setCurrency('ru-RU');
      setCost('');
    
  
      navigation.goBack();
    }
    else 
    { 
      //storage.clearAll();
      Alert.alert('Ошибка, заполните наименование и сумму');
      return;
    }
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новая транзакция</Text>
      <TextInputField
        label="Наименование"
        value={name}
        onChangeText={setName}
      />
      <PickerField
        label="Категория"
        selectedValue={category}
        onValueChange={setCategory}
        options={[
          { label: 'Еда', value: 'food' },
          { label: 'Здоровье', value: 'health' },
          { label: 'Транспорт', value: 'transport' },
          { label: 'Одежда', value: 'cloth' },
          { label: 'Быт', value: 'household' },
          { label: 'Красота', value: 'beauty' },
        ]}
      />
      <TextInputField
        label="Сумма"
        value={cost}
        onChangeText={setCost}
      />
      <PickerField
        label="Валюта"
        selectedValue={currency}
        onValueChange={setCurrency}
        options={[
          { label: '₽', value: 'ru-RU' },
          { label: '$', value: 'en-US' },
          { label: '€', value: 'fr-FR' },
        ]}
      />
      <View style={styles.button}>
       
        <SetButton
          title={"Сохранить"}
          onPress={saveExpense}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default AddNewExpensesScreen;