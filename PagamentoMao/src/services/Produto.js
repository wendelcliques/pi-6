import { Alert } from 'react-native';
import {getRealm} from './Realm';
//import {getUUID} from './UUID';

export const getProdutos = async () => {
    const realm = await getRealm();
    const produtos = realm.objects('Produto');
    return produtos;
};

export const saveProduto = async value => {
 const realm = await getRealm();
let data = {};
const {amount} = value;

try {
 realm.write(() => {
     data = {
        //id: getUUID(),
        id: 'ABC',
        amount: amount,       
        produtoAt: new Date(),       
        isInit: false,
       
     };

     realm.create('Produto', data, true);
 });

 console.log(data);
} catch (error) {
    console.error('saveProduto :: error on save object: ', JSON.stringify(error));
    Alert.alert('Erro ao salvar os dados', );
}

 return data;
};