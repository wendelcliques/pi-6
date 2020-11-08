import React, {useEffect, useState} from 'react'
import { View, TouchableOpacity, Text, Modal, FlatList, TextInput, Button } from 'react-native'
import styles from '../styles/index'

import AdministradorCategoriasModal from './AdministradorCategoriasModal'

import {addEntry} from '../services/Entries'




const AdministradorProdutosModal = () => {
  
    const entry = {
        id: null,
        description: 'Digite o nome do produto',
        amount: 0,
        entryAt: new Date(),
        category: {id: null, name: 'Selecione'}
    };
    const [modalVisible, setModalVisible] = useState(false);

    const [amount, setAmount] = useState(entry.amount);
    const [description, setDescription] = useState(entry.description);
    const [category, setCategory] = useState(entry.category);

   

    const save = () => {
        const value = {
            amount: parseFloat(amount),
            description: description,
        };


        console.log('AdministradorProduto :: save', value);

        addEntry(value);
    };
    return (
        <View>
            <TouchableOpacity style={styles.adProdModalButton}
            onPress={() => {setModalVisible(true);
            }}>
                <Text style={styles.adProdModalButtonText}>Adicionar Produto</Text>
            </TouchableOpacity>



            <Modal 
            animationType="slide"
            transparent={false}
            visible={modalVisible}>


              
               
                 <View style={styles.modalAdmProd}>
                 <TextInput
                onChangeText={text => setDescription(text)}
                value={description}
                />

                <AdministradorCategoriasModal 
                category={category}  
                onChangeCategory={setCategory}/>
                <TextInput
                onChangeText={text => setAmount(text)}
                value={amount}
                />

                
           
            
                <Button title="Adicionar" onPress={save} />



                <TouchableOpacity  
style={styles.modalAdmProdCloseButton}
                onPress={() => {setModalVisible(false);}}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Fechar</Text>
                </TouchableOpacity>
            </View>

           
            </Modal>
        </View>
    )
}

export default AdministradorProdutosModal

//<AdministradorCategoriasModal />
