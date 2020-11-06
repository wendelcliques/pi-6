import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native'

import {getEntries} from '../services/Entries'

import Container from '../components/Core/Container/index';


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
              <FlatList
                  data={entries}
                  keyExtractor={item => item.id}
                   renderItem={({item}) => (
                     <View style={styles.containerListaProdutos}>
                        <View>

                        </View>

                        <View style={styles.containerListaProdutosDescription}>
                          <Text style={styles.entry}>
                            - {item.description} 
                           </Text>
                        </View>

                        <View style={styles.containerListaProdutosValue}>
                         <Text>- ${item.amount}</Text>
                        
                        </View>
                      </View>

                   )}
              />

            </View>
            

          );
        };
          

      
      
     

  

export default ListaProdutos
