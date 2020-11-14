import React, {useEffect, useState} from 'react'
import {Modal, View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from '../styles/index'

import {getDefaultUsers} from '../services/Users';

const AdminUsuariosModal = ({ user, onChangeUsuario}) => {

    
    const [modalVisible, setModalVisible] = useState(false);
   const [defaultUsuarios, setDefaultUsuarios] = useState([]);

  // const [name, setName] = useState(users.name);
  // const [user, setUser] = useState(users.user);

  

      useEffect(() => {
        async function loadUsuarios() {
            const data = await getDefaultUsers();
            setDefaultUsuarios(data);
        }
        loadUsuarios();
    }, []);

    const onUsuariosPress = item => {
        onChangeUsuario(item);
        onClosePress();
    };

    const onClosePress = () => {
        setModalVisible(false);
    };



    return (
        <View>
             <TouchableOpacity style={styles.adProdModalButton}
            onPress={() => {setModalVisible(true);
            }}>
                <Text style={styles.adProdModalButtonText}>{user.name}</Text>
            </TouchableOpacity>

            <Modal 
            animationType="slide"
            transparent={false}
            visible={modalVisible}>
                <View>
           
            <FlatList
data={defaultUsuarios}
keyExtractor={item => item.name}
renderItem={({item}) => (
  <TouchableOpacity 
  style={styles.modalAdmProdItem}
  onPress={() => 
    onUsuariosPress(item)}>

<Text style={styles.modalAdmProdItemText}>{item.name}</Text>

     
  </TouchableOpacity>  
)}
/>

            <TouchableOpacity  
style={styles.modalAdmProdCloseButton}
                onPress={onClosePress}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Fechar</Text>
                </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default AdminUsuariosModal
