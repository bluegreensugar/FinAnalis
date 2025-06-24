import React, { useState, useCallback } from 'react';
import { View, StyleSheet} from 'react-native';
import ItemList from '../components/ItemList';
import Header from '../components/Header';
import SetButton from '../components/SetButton';
import { useNavigation, useFocusEffect  } from '@react-navigation/native';
import storage from '../storage/Storage';

const HomeScreen = () => {
const navigation = useNavigation();
  const [data, setData] = useState([]);

  const loadExpenses = useCallback(() => {
    const massExpenses = storage.getString('expenses');
    const expenses = massExpenses ? JSON.parse(massExpenses) : [];
    setData(expenses); 
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadExpenses();
    }, [loadExpenses])
  );


  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Header />
        <ItemList data={data} />
      </View>
      <View style={styles.button}>
        <SetButton
          title={"Анализ"}
          onPress={() => navigation.navigate('Analytics')}
        />
      </View>
      <View style={styles.button}>
       
        <SetButton
          title={"Настройки"}
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between', 
  },
  list: {
    flex: 1,
    paddingBottom: 10, 
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;