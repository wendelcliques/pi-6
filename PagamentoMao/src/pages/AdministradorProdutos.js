import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'
import SumarioProdutos from '../components/SumarioProdutos'
import AdministradorProdutosModal from './AdministradorProdutosModal'

import AdminAddCategoriasModal from './AdminAddCategoriasModal'

import styles from '../styles/index';





const AdministradorProdutos = () => {

   

    return (
        <View>
           
           <View style={styles.actionButton}> 
            <AdministradorProdutosModal />
            <AdminAddCategoriasModal />
            </View>
          

           

            <View>
                <SumarioProdutos />
            </View>
        </View>
    )
}

export default AdministradorProdutos
