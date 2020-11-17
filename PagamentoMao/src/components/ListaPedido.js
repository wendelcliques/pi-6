import React, {useEffect, useState} from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, TextInput, Alert} from 'react-native'
import { addOrder} from '../services/Orders'

import {getOrders} from '../services/Orders'
import {getOrdersPedido} from '../services/Orders'
import {getEntries} from '../services/Entries'
import {updateOrder} from '../services/Orders'

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
                //description: description,
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
                             <Text>Pronto para retirar</Text>
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
        </View>
    )
}

export default ListaPedido
