import React, {useEffect, useState} from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, TextInput, Alert} from 'react-native'
import { addOrder} from '../services/Orders'

import {getOrders} from '../services/Orders'
import {getOrdersPedido} from '../services/Orders'
import {getEntries} from '../services/Entries'
import {updateOrder} from '../services/Orders'
import {deleteOrder} from '../services/Orders'

import {TextInputMask} from 'react-native-masked-text';

import styles from '../styles/index';

const ListaPedido = () => {
    const order = {
        id: null,
        description: null,
        price: 0,
        amount: 0,
        category: null,
        user: null,
        isInit: null,

    };

    const [id, setId] = useState(order.id);
    const [price, setPrice] = useState(order.price);
    const [description, setDescription] = useState(order.description);
    const [category, setCategory] = useState(order.category);
    
       
        const [amountOrder, setAmountOrder] = useState(order.amount);

        const [userOrder, setUserOrder] = useState(order.user);
        const [isInit, setIsInit] = useState(order.isInit);

        const [entries, setEntries] = useState([]);
        const [orders, setOrders] = useState([]);
    
        const [produto, setProduto] = useState([]);
    
        const [modalVisible, setModalVisible] = useState(false);

        useEffect(() => {
            async function loadOrders() {
              const data = await getOrdersPedido(entries);
              setOrders(data);
            }
        
            loadOrders();
        
            console.log('EntryList :: useEffect');
          }, [order]);

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
               isInit: true,
               situation: 'Pedido pronto para retirar',
            };
        
            console.log('ListaProduto :: botão atualizar', value);
            console.log('ListaProduto :: update.description', value);
        
            updateOrder(value);
            onClosePress();
        };

        const onClosePress = () => {
            setModalVisible(false);
          };

          const onDelete = () => {
            Alert.alert(
              'Encerrar o pedido?',
              'Você deseja realmente encerrar esse pedido?',
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
            deleteOrder(value);
            onClosePress();
          };


    return (
        <View>
          <FlatList
                  data={orders}
                  keyExtractor={item => item.id}
                   renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true); 
                      setId(item.id) //variavel id de produto
                      setPrice(item.price) //variavel preço do produto
                      
                      setDescription(item.description) //variavel nome do produto
                      setCategory(item.category.name) //variavel barraca do produto
                      setAmountOrder(item.amount)
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
                  <Text>{item.situation}</Text>
                             </View>
                        </View>

                        <View style={styles.containerListaProdutosValue}>
                         <Text style={styles.containerListaProdutosValueText}>- ${item.price}</Text>
                         <Text style={styles.containerListaProdutosValueText}>Quantidade: {item.amount}</Text>
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

                  add();
                 

                 
                }}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Retirar o pedido</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                style={styles.modalAdmProdCloseButton}
                onPress={() =>{
                 
                  onDelete();

                 
                }}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Pedido entregue</Text>
                    </TouchableOpacity>

                    

                    </View>   

              </Modal>

        </View>
    )
}

export default ListaPedido
