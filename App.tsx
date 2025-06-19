import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './scr/navigation/navigation'




const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}