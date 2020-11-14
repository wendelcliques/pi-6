import React, {useEffect, useState} from 'react'
import {Modal, View, Text, TouchableOpacity, FlatList } from 'react-native'
import {  TextInput, Button } from 'react-native'
import styles from '../styles/index'

import {addUsers} from '../services/Users'

const LoginUsuarioModal = () => {

    const user = {
        id: null,
        name: null,
        password: null,
       
    };
    const [modalVisible, setModalVisible] = useState(false);
    

    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState(user.password);

        const save = () => {
            const value = {
                name: name,
               password: password,
            };
    
    
            console.log('AdministradorProduto :: save', value);
    
            addUsers(value);
            setModalVisible(false);
        };
   

    return (
        <View>
             <TouchableOpacity style={styles.adProdModalButton}
            onPress={() => {setModalVisible(true);
                setName(null);
                setPassword(null);
            }}>
                <Text style={styles.adProdModalButtonText}>Cadastre-se</Text>
            </TouchableOpacity>

            <Modal 
            animationType="slide"
            transparent={false}
            visible={modalVisible}>
               <View style={styles.container}>

                <TextInput
                  style={styles.mask}
                 placeholder = "Digite o seu nome"
                onChangeText={text => setName(text)}
                value={name}
                />
                 <TextInput
                 secureTextEntry={true}
                  style={styles.mask}
                 placeholder = "Digite sua senha"
                onChangeText={text => setPassword(text)}
                value={password}
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

export default LoginUsuarioModal
