const PurchaseOrderSchema = {
    name: 'PurchaseOrder',
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
      category: 'Category',
      entries: 'Entry[]',
      user: 'User',
      situation: 'string',
    },
  };
  
  export default PurchaseOrderSchema;