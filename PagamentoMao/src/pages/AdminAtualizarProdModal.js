import React, {useEffect, useState} from 'react'
import {Modal, View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles/index'


const AdminAtualizarProdModal = ({isVisible, onCancel, onChangeItem}) => {

   
   
    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        >
            <View>
    
            
                <TouchableOpacity  
style={styles.modalAdmProdCloseButton}
                onPress={onCancel}>
                    <Text style={styles.modalAdmProdCloseButtonText} >Fechar</Text>
                    </TouchableOpacity>
            
            </View>

           
           
        </Modal>
    )
}

export default AdminAtualizarProdModal
