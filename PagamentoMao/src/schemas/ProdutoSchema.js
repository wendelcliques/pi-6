const ProdutoSchema = {
    name: 'Produto',         
    primaryKey: 'id',
    properties: {
      id: 'string',
      amount: 'double',
      description: 'string?',
      entryAt: 'date',
      latitude: 'float?',
      longitude: 'float?',
      address: 'string?',
      photo: 'string?',
      isInit: 'bool',
     barraca: 'Barraca?',

    },


    
     
};

export default ProdutoSchema;