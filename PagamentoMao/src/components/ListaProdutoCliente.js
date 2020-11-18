import React, {useEffect, useState} from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, TextInput, Alert} from 'react-native'

import { addOrder} from '../services/Orders'
import {getOrders} from '../services/Orders'
import {getEntries} from '../services/Entries'

import {TextInputMask} from 'react-native-masked-text';

import styles from '../styles/index';

const ListaProdutoCliente = () => {
    const entry = {
        id: null,
        description: null,
        price: 0,
        category: null,
    };

    const order = {
        id: null,
        description: null,
        price: 0,
        amount: 0,
        category: null,
        user: null,

    };

    const [id, setId] = useState(entry.id);
const [price, setPrice] = useState(entry.price);
const [description, setDescription] = useState(entry.description);
const [category, setCategory] = useState(entry.category);

   
    const [amountOrder, setAmountOrder] = useState(order.amount);
 
    const [userOrder, setUserOrder] = useState(order.user);

    const [entries, setEntries] = useState([]);
    const [orders, setOrders] = useState([]);

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

      const add = () => {
         


        const value = {
            id: id,
            price: parseFloat(price),
            amount: parseFloat(amountOrder),
            description: description,
            category: category,
           // user: userOrder,
           situation: 'Pedido no carrinho',
        };
    
        console.log('ListaProduto :: botão atualizar', value);
        console.log('ListaProduto :: update.description', value);
    
        addOrder(value);
        onClosePress();
    };

    
    const onClosePress = () => {
        setModalVisible(false);
      };



    return (

  
        <View>



          <View>
                      <FlatList
                  data={entries}
                  keyExtractor={item => item.id}
                   renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true); 
                      setId(item.id) //variavel id de produto
                      setPrice(item.price) //variavel preço do produto
                      
                      setDescription(item.description) //variavel nome do produto
                      setCategory(item.category.name) //variavel barraca do produto
                      setAmountOrder(0)
                      onChangePress(item) //chama o setProduto com os valores do item atual

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
                             <Text>Carrinho</Text>
                             </View>
                        </View>

                        <View style={styles.containerListaProdutosValue}>
                         <Text style={styles.containerListaProdutosValueText}>- ${item.price}</Text>
                        
                        </View>
                      
                      </View>
                      </TouchableOpacity>
                   )}
              />

</View>

                <Modal
              style={styles.container}
               animationType="slide"
               transparent={false}
               visible={modalVisible}
              >
                 <View style={styles.modalAdmProd}> 
                 <View style={styles.actionButton}> 
              
                 <Text style={styles.label}>Barraca</Text>
                 <Text style={styles.mask}>{category}</Text> 
                 </View> 
                 <View style={styles.actionButton}> 
                 <Text style={styles.label}>Produto</Text>     
                <Text style={styles.mask}>{description}</Text>
                </View>  
                <View style={styles.actionButton}> 
                <Text style={styles.label}>Cliente</Text>
               <Text style={styles.mask}>{userOrder}</Text>
               </View>
               <View style={styles.actionButton}> 
               <Text style={styles.label}>Preço</Text>
                    <Text style={styles.mask}>R$ {price}</Text>
                    </View>

                    <View style={styles.actionButton}> 
                    <Text style={styles.label}>Quantidade</Text>
                    <TextInputMask 
                style={styles.mask}
                 type={'money'}
                 options={{
                    precision: 0,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: ''
                  }}

                  value={amountOrder}
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedValue, rawValue) => setAmountOrder(rawValue)}
                />
                </View>



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
                 
                  add( );

                 
                }}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Adicionar ao carrinho</Text>
                    </TouchableOpacity>

                    

                    </View>   

              </Modal>
        </View>
    )
}

export default ListaProdutoCliente
