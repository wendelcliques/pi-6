const EntrySchema = {
  name: 'Entry',
  primaryKey: 'id',
  properties: {
    id: 'string',
    price: 'double', 
    amount: 'double',
    description: 'string',
    entryAt: 'date',
    latitude: 'float?',
    longitude: 'float?',
    address: 'string?',
    photo: 'string?',
    isInit: 'bool',
    order: {type: 'int', default: 0},
    category: 'Category',
  },
};

export default EntrySchema;
