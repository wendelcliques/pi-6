import React, {useEffect, useState} from 'react'
import { View, TouchableOpacity, Text, Modal, TextInput, Button } from 'react-native'
import styles from '../styles/index'

import AdminUsuariosModal from './AdminUsuariosModal'

import {TextInputMask} from 'react-native-masked-text';

import {addCategory} from '../services/Categories';




const AdminAddCategoriasModal = () => {
    const category = {
        id: null,
        name: null,
        user: {id: null, name: 'Selecione'}
    };
   
   /* const users = {
        id: null,
        name: null,
        user: {id: null, name: 'Selecione'}

        
    };*/
    const [modalVisible, setModalVisible] = useState(false);
  
    

    const [name, setName] = useState(category.name);
    const [user, setUser] = useState(category.user);


  
    const save = () => {
        const value = {
            name: name,
            user: user,
        };


        console.log('AdministradorProduto :: save', value);

        addCategory(value);
        setModalVisible(false);
    };


    return (
        <View>
        <View>
            <TouchableOpacity style={styles.adProdModalButton}
            onPress={() => {setModalVisible(true);
               
            }}>
                <Text style={styles.adProdModalButtonText}>Adicionar</Text>
                <Text style={styles.adProdModalButtonText}>Barraca</Text>
            </TouchableOpacity>
            <Text></Text>
        </View>

            <Modal 
            animationType="slide"
            transparent={false}
            visible={modalVisible}>

<View style={styles.modalAdmProd}>
                 <TextInput
                  style={styles.mask}
                 placeholder = "Digite o nome da barraca"
                onChangeText={text => setName(text)}
                value={name}
                />

                <AdminUsuariosModal 
              user={user}
                onChangeUsuario={setUser}
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

export default AdminAddCategoriasModal
