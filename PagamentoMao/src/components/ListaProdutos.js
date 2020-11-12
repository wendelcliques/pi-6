import React, {useEffect, useState} from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, TextInput, Alert} from 'react-native'

import {getEntries} from '../services/Entries'

import {updateEntry} from '../services/Entries'
import {deleteEntry} from '../services/Entries'

import {TextInputMask} from 'react-native-masked-text';




import styles from '../styles/index';
//import AdminAtualizarProdModal from '../pages/AdminAtualizarProdModal';

const ListaProdutos = () => {
  const entry = {
    id: null,
    description: null,
    amount: 0,
    entryAt: new Date(),
    category: null,
};

const [id, setId] = useState(entry.id);
const [amount, setAmount] = useState(entry.amount);
const [description, setDescription] = useState(entry.description);
const [category, setCategory] = useState(entry.category);

//const [modalVisible, setModalVisible] = useState(false);



    const [entries, setEntries] = useState([]);

    const [produto, setProduto] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

   

    useEffect(() => {
      async function loadEntries() {
        const data = await getEntries();
        setEntries(data);
      }
  
      loadEntries();
  
      console.log('EntryList :: useEffect');
    }, [entry]);

    const onChangePress = item => {
      setProduto(item);  

      console.log('ListaProduto :: onChangePress', item);
      

    };

  

  const update = () => {
    const value = {
        id: id,
        amount: parseFloat(amount),
        description: description,
        category: category,
    };

    console.log('ListaProduto :: botão atualizar', value);
    console.log('ListaProduto :: update.description', value);

    updateEntry(value);
    onClosePress();
};

const onDelete = () => {
  Alert.alert(
    'Apagar?',
    'Você deseja realmente apagar esse produto?',
    [
      {text: 'Não', style: 'cancel'},
      {text: 'Sim', onPress: () => onOkPress()},
    ],
    {cancelable: false},
  );
};
const onOkPress = () => {
  const value = {
    id: id,
  }
  deleteEntry(value);
  onClosePress();
};


   
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
                      setId(item.id)
                      setAmount(item.amount)
                      setDescription(item.description)
                      setCategory(item.category)
                      onChangePress(item)

                      console.log('ListaProduto :: Flatlist onpress', item);

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
              style={styles.container}
               animationType="slide"
               transparent={false}
               visible={modalVisible}
              >
                 <View style={styles.modalAdmProd}>
                       
                                              
                        <TextInputMask 
                style={styles.mask}
                 type={'money'}
                 options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: ''
                  }}

                  value={amount}
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedValue, rawValue) => setAmount(rawValue)}
                />
                      

                <TextInput
                style={styles.mask}
                placeholder = "Produto"
                onChangeText={text => setDescription(text)}
                value={description}
                />

               
                 
             

              <TouchableOpacity  
                style={styles.modalAdmProdCloseButton}
                onPress={() =>{
                  onClosePress();
                }}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Fechar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                style={styles.modalAdmProdCloseButton}
                onPress={() =>{
                 
                  update( );

                 
                }}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Atualizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                style={styles.modalAdmProdCloseButton}
                onPress={() =>{
                 
                  onDelete();

                 
                }}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Apagar</Text>
                    </TouchableOpacity>

                    </View>   

              </Modal>

                   

            </View>
            

          );
        };
          

      
      
     

  

export default ListaProdutos
