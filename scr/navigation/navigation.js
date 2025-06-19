import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomeScreen.js';
import AddNewExpenses from '../screens/AddNewExpensesScreen.js'
import AnalyticsPage from '../screens/AnalyticsScreen.js'
import SettingsPage from '../screens/SettingsScreen.js'

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen:HomePage,
      options: {
        title: 'Главное окно',
      },
    } ,
    AddExp: {
      screen:AddNewExpenses,
      options: {
        title: 'Добавить траты',
      },
    } ,
    Analytics: {
      screen:AnalyticsPage,
      options: {
        title: 'Добавить траты',
      },
    } ,
   Sttngs: {
      screen:SettingsPage,
      options: {
        title: 'Добавить траты',
      },
    } ,
    Sttngs:SettingsPage,
  },
});

export default RootStack