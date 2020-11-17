import React from 'react'
import { View, TouachableOpacity, Text } from 'react-native'

import styles from '../styles/index'

import CarrosselBarracas from '../components/CarrosselBarracas';



import Colors from '../styles/Colors';
import SaldoCliente from '../components/SaldoCliente';

import LinearGradient from 'react-native-linear-gradient';

import SumarioProdutos from '../components/SumarioProdutos';
import SumarioCarrinhoCliente from '../components/SumarioCarrinhoCliente';
import CarrosselFlat from '../components/CarrosselFlat';

const ClienteCarrinho = () => {
    return (
        <View style={styles.container}>

            <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.saldoCliente}>
            <SaldoCliente />
            </LinearGradient>

            <View style={styles.carouselItemContainer} >
            <CarrosselFlat />
            </View>

            <View style={styles.listadeprodutos}>
            <SumarioCarrinhoCliente />
            </View>
            
        </View>
    )
}

export default ClienteCarrinho
