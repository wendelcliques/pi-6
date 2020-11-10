import React, {useEffect, useState} from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity } from 'react-native'

import {getEntries} from '../services/Entries'




import styles from '../styles/index';
//import AdminAtualizarProdModal from '../pages/AdminAtualizarProdModal';

const ListaProdutos = () => {
    [entries, setEntries] = useState([]);

    let[produto, setProduto] = useState([]);

    useEffect(() => {
      async function loadEntries() {
        const data = await getEntries();
        setEntries(data);
      }
  
      loadEntries();
  
      console.log('EntryList :: useEffect');
    }, []);

    const onChangePress = item => {
      setProduto(item);
     
  };

    const [modalVisible, setModalVisible] = useState(false);
    const onClosePress = () => {
      setModalVisible(false);
    };

    return (            
            <View>
              <FlatList
                  data={entries}
                  keyExtractor={item => item.id}
                   renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                      onChangePress(item)
                    }}>
                     
                     <View style={styles.containerListaProdutos}>
                        <View>
                          <Text>Foto</Text>
                        </View>

                        <View style={styles.containerListaProdutosDescription}>
                          <Text style={styles.entry}>
                            - {item.description} 
                           </Text>
                           <View>
                             <Text>Atualizar</Text>
                             </View>
                        </View>

                        <View style={styles.containerListaProdutosValue}>
                         <Text style={styles.containerListaProdutosValueText}>- ${item.amount}</Text>
                        
                        </View>
                      
                      </View>
                      </TouchableOpacity>
                   )}
              />

              <Modal
               animationType="slide"
               transparent={false}
               visible={modalVisible}
              >
 <Text>{produto.amount}</Text>
 <Text>{produto.description}</Text>
                 
             

              <TouchableOpacity  
style={styles.modalAdmProdCloseButton}
                onPress={() =>{
                  onClosePress();
                }}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Fechar</Text>
                    </TouchableOpacity>

              </Modal>

                   

            </View>
            

          );
        };
          

      
      
     

  

export default ListaProdutos
