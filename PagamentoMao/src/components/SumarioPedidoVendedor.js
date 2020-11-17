import React from 'react'
import { View, Text } from 'react-native'

import ListaPedido from './ListaPedido';
import Container from '../components/Core/Container/index';

const SumarioPedidoVendedor = () => {
    return (
        <Container 
        title="Lista de produtos" 
        actionLabelText="Últimos 7 dias" 
        actionButtonText="Ver mais"
        onPressActionButton={() => {}}>          
            <ListaPedido />
            
        </Container>

  
    );
}

export default SumarioPedidoVendedor
