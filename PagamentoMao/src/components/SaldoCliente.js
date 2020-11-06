import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/index';
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../styles/Colors';

const SaldoCliente = () => {
    return (
        <View style={styles.containerSaldo}>
       <Text style={styles.saTexto}>Saldo atual</Text>
       <Text style={styles.saValor} >2000,00</Text>
       <Text style={styles.saExtrato} >Ver extrato</Text>  
        </View>
        
        
    )

    };
export default SaldoCliente
