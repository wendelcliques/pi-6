import {getRealm} from './Realm';

export const saveProduto = async () => {
 const realm = await getRealm();
let data = {};

 realm.write(() => {
     data = {
        id: 'ABC',
        saldo: 12.4,       
        produtoAt: new Date(),       
        isInit: false,
       
     };

     realm.create('Produto', data, true);
 });

 console.log(data);

 return data;
};