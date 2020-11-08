import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'
import SumarioProdutos from '../components/SumarioProdutos'
import AdministradorProdutosModal from './AdministradorProdutosModal'





const AdministradorProdutos = () => {

   

    return (
        <View>
           

            <AdministradorProdutosModal />
          

           

            <View>
                <SumarioProdutos />
            </View>
        </View>
    )
}

export default AdministradorProdutos
