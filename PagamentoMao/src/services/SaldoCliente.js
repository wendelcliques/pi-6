import {getRealm, getRealmm} from './Realm';

export const getSaldoCliente = async () => {
    const realm = await getRealm();

    let produtos = realm.objects('Produto');

    return produtos.sum('amount');
}