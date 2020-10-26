import { Alert } from 'react-native';
import {getRealm} from './Realm';

export const saveProduto = async () => {
 const realm = await getRealm();
let data = {};

try {
 realm.write(() => {
     data = {
        id: 'ABC',
        amount: 12.4,       
        produtoAt: new Date(),       
        isInit: false,
       
     };

     realm.create('Produto', data, true);
 });

 console.log(data);
} catch (error) {
    console.error('saveProduto :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados');
}

 return data;
};