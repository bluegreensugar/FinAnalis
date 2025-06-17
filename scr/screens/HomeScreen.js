import React from 'react';
import { SectionList, View, Button, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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



const HomePage = () => {

  const navigation = useNavigation();

  return (
  <View
    style={styles.mainView}>
      <View style={styles.mainRow}>
        <Text
            style ={styles.mainText}> 
            Мои расходы </Text>
           <Button 
              title="+" 
              onPress={() => navigation.navigate('AddExp')}
              color='#add8e6' /> 
      </View>
        <SectionList style ={{ borderRadius:10, 
            borderColor: '#add8e6',
            borderWidth:2
         }}
        
          sections={DATA}
          renderItem = {({item}) => (
            <View style={styles.productRow}>
              <View style={styles.textBlock}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              <Text style={styles.priceText}>{item.cost} руб.</Text>
            </View>)}
          renderSectionHeader={
            ({section:{title}})=>(
              <View style={styles.viewSectionHeader}>
                <Text style={styles.text}>{title}</Text>
              </View>
          )
          }
        >
          
        </SectionList>

  </View>

  );
};


const styles = StyleSheet.create(
{
  mainText:{
    color:'#add8e6',
    fontSize: 30,
    fontWeight: 'bold',
  },

  mainView:{
    marginTop:50,
    marginLeft:20,
    marginRight:20,

  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  viewSectionHeader:{
    backgroundColor:'#FFF',
    
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#add8e6',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  textBlock: {
    flexShrink: 1, 
    marginRight: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  categoryText: {
    fontSize: 14,
    color: '#665',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  }
)
export default HomePage;