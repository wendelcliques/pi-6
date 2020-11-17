import React from 'react'
import { View, Text } from 'react-native'

import ListaCarrinho from './ListaCarrinho';
import Container from '../components/Core/Container/index';

const SumarioCarrinhoCliente = () => {
    return (
        <Container 
        title="Lista de produtos" 
        actionLabelText="Últimos 7 dias" 
        actionButtonText="Ver mais"
        onPressActionButton={() => {}}>          
            <ListaCarrinho />
            
        </Container>

  
    );
}

export default SumarioCarrinhoCliente
