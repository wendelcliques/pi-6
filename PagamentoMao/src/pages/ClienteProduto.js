import React from 'react'
import { View, TouachableOpacity, Text } from 'react-native'

import styles from '../styles/index'

import CarrosselBarracas from '../components/CarrosselBarracas';



import Colors from '../styles/Colors';
import SaldoCliente from '../components/SaldoCliente';

import LinearGradient from 'react-native-linear-gradient';
import SumarioProdutos from '../components/SumarioProdutos';

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
            <SumarioProdutos />
            </View>
        </View>

    )
}

export default ClienteProduto
