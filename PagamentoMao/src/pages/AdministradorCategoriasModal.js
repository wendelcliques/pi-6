import React, {useEffect, useState} from 'react'
import { View, TouchableOpacity, Text, Modal, FlatList, TextInput, Button } from 'react-native'
import styles from '../styles/index'

import {getDefaultCategories} from '../services/Categories'



const AdministradorCategoriasModal = ({category, onChangeCategory}) => {
    const entry = {
        id: null,
        amount: 0,
        entryAt: new Date(),
        category: {id: null, name: 'Selecione'}
    };

    const [modalVisible, setModalVisible] = useState(false);

    const [defaultCategories, setDefaultCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const data = await getDefaultCategories();
            setDefaultCategories(data);
        }
        loadCategories();
    }, []);

    const onCategoryPress = item => {
        onChangeCategory(item);
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
                <Text style={styles.adProdModalButtonText}>{category.name}</Text>
            </TouchableOpacity>

            <Modal 
            animationType="slide"
            transparent={false}
            visible={modalVisible}>


              <View style={styles.modalAdmProd}>
             

              <FlatList
data={defaultCategories}
keyExtractor={item => item.id}
renderItem={({item}) => (
  <TouchableOpacity 
  style={styles.modalAdmProdItem}
  onPress={() => 
    onCategoryPress(item)}>

        
      <Text style={[styles.modalAdmProdItemText, {color: item.color}]}>{item.name}</Text>
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

export default AdministradorCategoriasModal

/* */
