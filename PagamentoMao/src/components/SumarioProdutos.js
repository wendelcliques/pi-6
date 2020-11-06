import React from 'react'

import ListaProdutos from './ListaProdutos';
import Container from '../components/Core/Container/index';

const SumarioProdutos = () => {
    


    return (
        <Container 
        title="Lista de produtos" 
        actionLabelText="Últimos 7 dias" 
        actionButtonText="Ver mais"
        onPressActionButton={() => {}}>          
            <ListaProdutos />
            
        </Container>

  
    );
};

export default SumarioProdutos;