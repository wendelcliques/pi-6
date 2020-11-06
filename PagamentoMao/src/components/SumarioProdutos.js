
import { View, Text, TouachableOpacity } from 'react-native'



import styles from '../styles/index';
import ListaProdutos from './ListaProdutos';

const SumarioProdutos = () => {
    


    return (
        <View style={styles.containerLista}>          
            <Text style={styles.containerListaTitulo} >Lista de Produtos</Text>
            <ListaProdutos />
            <View >
                <Text > Últimos 7 dias</Text>
                <TouachableOpacity >
                <Text >Ver mais</Text>

                </TouachableOpacity>

            </View>

      
      
        </View>

  
    )
}

export default SumarioProdutos;