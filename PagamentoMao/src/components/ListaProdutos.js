import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from '../styles/index';

const ListaProdutos = () => {
    return (
        <View>
            <Text>Lista de Produtos</Text>
            <FlatList
                data={[
                    {key: 'Refrigerante: $10,00'},
                    {key: 'Pastel: $10,00'},
                    {key: 'Pizza: $10,00'},
                    {key: 'Cachorro Quente: $10,00'},
                    {key: 'Espeto de Morango: $10,00'},
                    {key: 'Maçã do Amor: $10,00'},
                    {key: 'Crepe: $10,00'},
                    {key: 'Batata Frita: $10,00'},
                    {key: 'Pipoca: $10,00'},
                    {key: 'Algodão Doce: $10,00'},
                    
                ]}

                renderItem={({item}) => <Text style={styles.carouselItemTitle}>- {item.key}</Text>}
            />
        </View>
    )
}

export default ListaProdutos
