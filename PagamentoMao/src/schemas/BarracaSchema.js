const BarracaSchema = {
    name: 'Barraca',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        color: {type: 'string', default: '#fff'},
        isDefault: {type: 'bool', default: false},
        isCredit: {type: 'bool', default: false},
        isDebit: {type: 'bool', default: false},
        order: {type: 'int', default: 0},
        produtos: 'Produto[]',
      
    },
};

export default BarracaSchema;