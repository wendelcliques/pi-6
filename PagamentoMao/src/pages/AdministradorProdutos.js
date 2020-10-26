import React from 'react'
import { View, TextInput, Button } from 'react-native'
import styles from '../styles/index'
import ListaProdutos from '../components/ListaProdutos';

import {saveProduto } from '../services/Produto';



const AdministradorProdutos = () => {
    const save = () => {
        alert('oi, passei aqui');
        saveProduto();
    };


    return (
        <View style={styles.container}>
            <View>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <Button title="Camera" />
            </View>
            <View>
                <ListaProdutos />
            </View>
            <View>
            <Button title="Salvar"  onPress={save}/>
            <Button title="Fechar" />
            </View>

        </View>
    )
}

export default AdministradorProdutos
