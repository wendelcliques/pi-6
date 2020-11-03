import React from 'react'
import { View, Text } from 'react-native'
import useSaldoCliente from '../hooks/useSaldoCliente'

const SaldoCliente = () => {
    const [saldoCliente] = useSaldoCliente();

 

    return (
        <View>
            <Text>Saldo Atual</Text>
            <Text>{saldoCliente}</Text>
    <Text></Text>
        </View>
    )
}

export default SaldoCliente
