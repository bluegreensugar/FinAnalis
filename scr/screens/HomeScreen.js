import React from 'react';
import { View, StyleSheet} from 'react-native';
import ItemList from '../components/ItemList';
import Header from '../components/Header';
import SetButton from '../components/SetButton';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    title: '14.06.25',
    data: [
     { name:'Вода', category:'еда', cost: '10'},
     { name:'Хлеб', category:'еда', cost: '50'},
     { name:'Гематоген', category:'здоровье', cost: '80'},
    ],

  },
  {
    title: '14.06.25',
    data: [
     { name:'Вода', category:'еда', cost: '10'},
     { name:'Хлеб', category:'еда', cost: '50'},
     { name:'Гематоген', category:'здоровье', cost: '80'},
    ],

  },
  {
    title: '14.06.25',
    data: [
     { name:'Вода', category:'еда', cost: '10'},
     { name:'Хлеб', category:'еда', cost: '50'},
     { name:'Гематоген', category:'здоровье', cost: '80'},
    ],

  },
  {
    title: '14.06.25',
    data: [
     { name:'Вода', category:'еда', cost: '10'},
     { name:'Хлеб', category:'еда', cost: '50'},
     { name:'Гематоген', category:'здоровье', cost: '80'},
    ],

  },
  {
    title: '12.06.25',
    data: [
     { name:'шампунь', category:'красота', cost: '679'},
     { name:'зубная щетка', category:'бытовые товары' , cost: '200'},
    ],
  },
  
];



const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Header />
        <ItemList data={DATA} />
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
    paddingBottom: 40, 
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;