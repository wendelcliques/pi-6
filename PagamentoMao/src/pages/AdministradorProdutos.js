import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'
import styles from '../styles/index'
import ListaProdutos from '../components/ListaProdutos';

import {saveProduto } from '../services/Produto';



const AdministradorProdutos = () => {
  const [amount, setAmount] = useState('0');
  const save = () => {
      const value = {
          amount: parseFloat(amount),
      }
    saveProduto(value);
  };

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                onChangeText={text => setAmount(text)}
                value={amount}
                />
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
