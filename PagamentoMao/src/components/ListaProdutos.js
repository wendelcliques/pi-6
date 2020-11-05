import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native'
import {getEntries} from '../services/Entries'


import styles from '../styles/index';

const ListaProdutos = () => {
    [entries, setEntries] = useState([]);

    useEffect(() => {
      async function loadEntries() {
        const data = await getEntries();
        setEntries(data);
      }
  
      loadEntries();
  
      console.log('EntryList :: useEffect');
    }, []);


    return (
        <View>
            <Text>Lista de Produtos</Text>
            <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.description} - ${item.amount}
          </Text>
        )}
      />
        </View>
    )
}

export default ListaProdutos
