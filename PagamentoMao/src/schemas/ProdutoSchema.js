const ProdutoSchema = {
    nome: 'Produto',
    primaryKey: 'id',
    properties: {
        id: 'string',
        saldo: 'double',
        description: 'string',
        produtoAt: 'date',
        photo: 'string?',
        isInit: 'bool',
        barraca: 'Barraca?',

    },
};

export default ProdutoSchema;