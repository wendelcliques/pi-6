import {useEffect, useState} from 'react';

import {getSaldoCliente} from '../services/SaldoCliente';

const useSaldoCliente = () => {
    const [saldoCliente, setSaldoCliente] = useState();

    useEffect(() => {
        async function loadSaldoCliente() {
            const value = await getSaldoCliente();
            setSaldoCliente(value);
          
        }

        loadSaldoCliente();
    }, []);

    return [saldoCliente];
};

export default useSaldoCliente;