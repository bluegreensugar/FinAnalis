import React from 'react';
import { SectionList, View, Text, StyleSheet} from 'react-native';
import FormatPrice from '../utils/FormatPrice';
import SetButton from '../components/SetButton';
import {deleteExpenseById} from '../storage/Storage';


const ItemList = ({data}) => {
  return (
    <SectionList 
      sections={data}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item, section }) => (
        <View style={styles.productRow}>
          <View style={styles.textBlock}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <View style={styles.priceButtonWrapper}>
            <Text style={styles.priceText}>{FormatPrice(item.cost, item.currency)}</Text>
            <SetButton
              title={"Х"}
              onPress={() => {
                deleteExpenseById(section.title, item.id);
               
              }}
              color={'#FFDDEE'}
            />
          </View>
        </View>
      )}
      renderSectionHeader={
        ({section:{title}})=>(
          <View style={styles.viewSectionHeader}>
            <Text style={styles.text}>{title}</Text>
          </View>
        ) 
      }
    />
  );
};

const styles = StyleSheet.create({
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
  priceButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: 10,
  },
  viewSectionHeader:{
    backgroundColor:'#FFF',
  },
});

export default ItemList;
