import Realm from 'realm';

import BarracaSchema from '../schemas/BarracaSchema';
import ProdutoSchema from '../schemas/ProdutoSchema';

export const getRealm = async () => {
    const realm = await Realm.open({
        schema: [BarracaSchema, ProdutoSchema],
        schemaVersion: 6,
    });

    //dropDB(realm);
   // initDB(realm);
return realm;
};

export const dropDB = realm => {
    realm.write(() => {
        console.log('dropDB :: droping db ...');
        realm.deleteAll();
    });
};