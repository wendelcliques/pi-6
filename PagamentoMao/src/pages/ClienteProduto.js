import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles/index'

import CarrosselBarracas from '../components/CarrosselBarracas';

import ListaProdutos from '../components/ListaProdutos';

import Colors from '../styles/Colors';
import SaldoCliente from '../components/SaldoCliente';

import LinearGradient from 'react-native-linear-gradient';

const ClienteProduto = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.saldoCliente}>
            <SaldoCliente />
            </LinearGradient>
            <View style={styles.carouselItemContainer} >
            <CarrosselBarracas />
            </View>
            <View style={styles.listadeprodutos}>
            <ListaProdutos />
            </View>
        </View>

    )
}

export default ClienteProduto
