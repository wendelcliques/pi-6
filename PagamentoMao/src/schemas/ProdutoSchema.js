const ProdutoSchema = {
    name: 'Produto',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string?',
        amount: 'double',
        description: 'string?',
        produtoAt: 'date',
        photo: 'string?',
        isInit: 'bool',
        barraca: 'Barraca?',

    },
};

export default ProdutoSchema;