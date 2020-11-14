import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'
import SumarioProdutos from '../components/SumarioProdutos'
import AdministradorProdutosModal from './AdministradorProdutosModal'

import AdminAddCategoriasModal from './AdminAddCategoriasModal'





const AdministradorProdutos = () => {

   

    return (
        <View>
           

            <AdministradorProdutosModal />
            <AdminAddCategoriasModal />

          

           

            <View>
                <SumarioProdutos />
            </View>
        </View>
    )
}

export default AdministradorProdutos
