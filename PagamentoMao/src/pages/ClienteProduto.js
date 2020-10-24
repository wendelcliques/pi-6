import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles/index'

import CarrosselBarracas from '../components/CarrosselBarracas';

const ClienteProduto = () => {
    return (
        <View style={styles.container}>
            <View style={styles.carouselItemContainer} >
            <CarrosselBarracas />
            </View>
            <View style={styles.listadeprodutos}>

            </View>
        </View>

    )
}

export default ClienteProduto
