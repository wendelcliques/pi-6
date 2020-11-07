import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'
import SumarioProdutos from '../components/SumarioProdutos'
import AdministradorProdutosModal from './AdministradorProdutosModal'


import {addEntry} from '../services/Entries'

const AdministradorProdutos = () => {

    const [amount, setAmount] = useState('0.00');

    const save = () => {
        const value = {
            amount: parseFloat(amount),
        };

        console.log('AdministradorProduto :: save', value);

        addEntry(value);
    };

    return (
        <View>
            <View>
                <TextInput
                onChangeText={text => setAmount(text)}
                value={amount}
                />
            </View>

            <AdministradorProdutosModal />

            <View>
                <Button title="Adicionar" onPress={save} />
            </View>

            <View>
                <SumarioProdutos />
            </View>
        </View>
    )
}

export default AdministradorProdutos
