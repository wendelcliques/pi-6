import React from 'react'
import { View, Text, Button } from 'react-native'
import { saveProduto } from '../services/Produto';

const VendedorProdutos = () => {

    const save =() => {
saveProduto();
    };
    return (
        <View>
            <Text>Produto</Text>
            <Button title="Adicionar"></Button>
        </View>
    )
}

export default VendedorProdutos
