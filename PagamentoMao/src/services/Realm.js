import Realm from 'realm';

import BarracaSchema from '../schemas/BarracaSchema';
import ProdutoSchema from '../schemas/ProdutoSchema';

export const getRealm = async () => {
    const realm = await Realm.open({
        schema: [BarracaSchema, ProdutoSchema],
        schemaVersion: 1,
    });
return realm;
};