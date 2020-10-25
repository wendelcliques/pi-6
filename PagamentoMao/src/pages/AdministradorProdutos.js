import React from 'react'
import { View, TextInput, Button } from 'react-native'
import styles from '../styles/index'
import ListaProdutos from '../components/ListaProdutos';

const AdministradorProdutos = () => {
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
            <Button title="Salvar" />
            <Button title="Fechar" />
            </View>

        </View>
    )
}

export default AdministradorProdutos
