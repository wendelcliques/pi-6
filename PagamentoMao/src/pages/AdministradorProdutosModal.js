import React, {useEffect, useState} from 'react'
import { View, TouchableOpacity, Text, Modal, TextInput, Button } from 'react-native'
import styles from '../styles/index'

import AdministradorCategoriasModal from './AdministradorCategoriasModal'
import {TextInputMask} from 'react-native-masked-text';

import {addEntry} from '../services/Entries'




const AdministradorProdutosModal = () => {
  
    const entry = {
        id: null,
        description: null,
        price: 0,
        category: {id: null, name: 'Selecione'}
    };
    const [modalVisible, setModalVisible] = useState(false);
    

    const [price, setPrice] = useState(entry.amount);
    const [description, setDescription] = useState(entry.description);
    const [category, setCategory] = useState(entry.category);

  

   

    const save = () => {
        const value = {
            price: parseFloat(price),
            description: description,
            category: category,
        };


        console.log('AdministradorProduto :: save', value);

        addEntry(value);
        setModalVisible(false);
    };
    return (
        <View>

            <View  style={styles.adProdModalContainer} >
            <TouchableOpacity style={styles.adProdModalButton}
            onPress={() => {
                setModalVisible(true);
                
            }}>
                <Text style={styles.adProdModalButtonText}>Adicionar</Text>
                <Text style={styles.adProdModalButtonText}>Produto</Text>
            </TouchableOpacity>

           

            <TouchableOpacity style={styles.adProdModalButton}
            onPress={() => {setModalVisible(true);
               
            }}>
                <Text style={styles.adProdModalButtonText}>Adicionar</Text>
                <Text style={styles.adProdModalButtonText}>Usuário</Text>
            </TouchableOpacity>
            </View>

            <Modal 
            animationType="slide"
            transparent={false}
            visible={modalVisible}>


            
               
                 <View style={styles.modalAdmProd}>
                 <TextInput
                 style={styles.mask}
                 placeholder = "Digite o nome do produto"
                onChangeText={text => setDescription(text)}
                value={description}
                />

                <AdministradorCategoriasModal 
                category={category}  
                onChangeCategory={setCategory}/>


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

                  value={price}
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedValue, rawValue) => setPrice(rawValue)}
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
