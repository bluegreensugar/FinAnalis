import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen.js';
import AddNewExpensesScreen from '../screens/AddNewExpensesScreen.js'
import AnalyticsScreen from '../screens/AnalyticsScreen.js'
import SettingsScreen from '../screens/SettingsScreen.js'

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen:HomeScreen,
      options: {
        title: 'Главное окно',
      },
    } ,
    AddExpenses: {
      screen:AddNewExpensesScreen,
      options: {
        title: 'Добавить траты',
      },
    } ,
    Analytics: {
      screen:AnalyticsScreen,
      options: {
        title: 'Аналитика',
      },
    } ,
   Settings: {
      screen:SettingsScreen,
      options: {
        title: 'Настройки',
      },
    } ,
  },
});

export default RootStack