const UserSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: 'string',
      hierarchy: 'string',
      name: 'string',
      entryAt: 'date',
      latitude: 'float?',
      longitude: 'float?',
      address: 'string?',
      photo: 'string?',
      isInit: 'bool',
      category: 'Category',
      purchaseOrder: 'PurchaseOrder',
    },
  };
  
  export default UserSchema;