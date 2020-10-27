import React, {useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import {getProdutos} from '../services/Produto'

import styles from '../styles/index';

const ListaProdutos = () => {
    [produtos, setProdutos] = useState([]);
useEffect(() => {
    async function loadProdutos() {
        const data = await getProdutos();
        setProdutos(data);
    }
    loadProdutos();

}, []);

    return (
        <View>
            <Text>Lista de Produtos</Text>
            <FlatList
                data={produtos}

                renderItem={({item}) => <Text style={styles.carouselItemTitle}>- {item.amount}</Text>}
            />
        </View>
    )
}

export default ListaProdutos
