import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInputField from '../components/TextInputField';
import PickerField from '../components/PickerField';
import SetButton from '../components/SetButton';

const AddNewExpensesScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новая транзакция</Text>
      <TextInputField
        label="Наименование"
      />
      <PickerField
        label="Категория"
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
      />
      <PickerField
        label="Валюта"
        options={[
          { label: '₽', value: 'RUB' },
          { label: '$', value: 'USD' },
          { label: '€', value: 'EUR' },
        ]}
      />
      <View style={styles.button}>
       
        <SetButton
          title={"Сохранить"}
          onPress={''}
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
