import React from 'react'
import { View, TouachableOpacity, Text } from 'react-native'

import styles from '../styles/index'

import CarrosselBarracas from '../components/CarrosselBarracas';



import Colors from '../styles/Colors';
import SaldoCliente from '../components/SaldoCliente';

import LinearGradient from 'react-native-linear-gradient';

import SumarioProdutos from '../components/SumarioProdutos';
import SumarioPedidoVendedor from '../components/SumarioPedidoVendedor';
import CarrosselFlat from '../components/CarrosselFlat';

const VendedorPedidos = () => {
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
        <SumarioPedidoVendedor />
        </View>
        
    </View>
    )
}

export default VendedorPedidos
