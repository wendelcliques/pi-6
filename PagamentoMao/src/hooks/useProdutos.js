import {useEffect, useState} from 'react';
import { getProdutos, saveProduto } from '../services/Produto';



const useProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function loadProdutos() {
            const data = await getProdutos();
            setProdutos(data);
        }
        loadProdutos();
    }, []);
    return [produtos, saveProduto];
};

export default useProdutos;