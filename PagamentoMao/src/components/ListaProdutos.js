
import { View, Text, FlatList } from 'react-native'


import useProdutos from '../hooks/useProdutos';

import styles from '../styles/index';

const ListaProdutos = () => {
    [produtos] = useProdutos();


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
