import React from 'react';
import { SectionList, View, Text, StyleSheet} from 'react-native';

const ItemList = ({data}) => {
  return (
  <View >
    <SectionList 
      sections={data}
      keyExtractor={(item, index) => item+index}
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
    />
  </View>    

  );
};


const styles = StyleSheet.create(
{
  new:{
    flex:1
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
  viewSectionHeader:{
    backgroundColor:'#FFF',
  },
  }
)

export default ItemList;