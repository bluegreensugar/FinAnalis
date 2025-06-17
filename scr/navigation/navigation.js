import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomeScreen.js';
import AddNewExpenses from '../screens/AddNewExpensesScreen.js'


const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen:HomePage,
      options: {
        title: 'Главное окно',
      
      },
    } ,
    AddExp:AddNewExpenses
  },
});

export default RootStack