import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SetButton from '../components/SetButton';

const Header = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.mainRow}>
      <Text
        style ={styles.mainText}> 
        Мои расходы </Text>
      <SetButton 
        title="+" 
        onPress={() => navigation.navigate('AddExpenses')} 
      /> 
    </View>
  )
};

const styles = StyleSheet.create({
  mainText:{
      color:'#add8e6',
      fontSize: 30,
      fontWeight: 'bold',
    },

    mainRow: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
    },
});

export default Header;