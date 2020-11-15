import React from 'react'
import { View, Text } from 'react-native'

import ListaProdutoCliente from './ListaProdutoCliente';
import Container from '../components/Core/Container/index';


const SumarioProdutoCliente = () => {
    return (
        <Container 
        title="Lista de produtos" 
        actionLabelText="Últimos 7 dias" 
        actionButtonText="Ver mais"
        onPressActionButton={() => {}}>          
            <ListaProdutoCliente />
            
        </Container>

  
    );
}

export default SumarioProdutoCliente
