import {Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export const addOrder = async value => {
    let data = {};

    const {price} = value;
    const {amount} = value;
    const {description} = value;
    const {category} = value;
    const {situation} = value;
  
    console.log('addEntry :: value: ', JSON.stringify(value));
  
    try {
      data = {
        price: price,
        amount: amount,
        description: description,
        category: category,
        situation: situation,
        entryAt: new Date(),
        
        isInit: false,
    
      };
  
      await firestore()
        .collection('orders')
        .add(data);
    } catch (error) {
      console.error(
        'addEntry :: error on save object: ',
        JSON.stringify(data),
        JSON.stringify(error),
      );
      Alert.alert('Erro', 'Houve um erro ao salvar este lançamento.');
    }
  
    return data;
  };

  export const updateOrder = async value => {
   
  
    console.log('updateEntry :: value: ', JSON.stringify(value));
    let data = {};
    const {id} = value;
    const {amount} = value;
    const {description} = value;
    const {category} = value;
    const {situation} = value;
  
    

    try {
      data = {
        id: id,
        amount: amount,
        description: description,
        category: category,
        situation: situation,
        entryAt: new Date(),
        
        isInit: false,
        
      };

      console.log('updateEntry :: data: ', JSON.stringify(data));
      
     await firestore()
     .collection('orders')
        .doc(data.id)
        .update( data);
    } catch (error) {
 

      console.error(
        'upEntry :: error on update object: ',
      
        'upEntry :: value.id: ',
        JSON.stringify(entry),
       
      );
      Alert.alert('Erro', 'Houve um erro ao atualizar este lançamento.');
    }
  
    return data;
  };

 /* console.error(
    'upEntry :: error on update object: ',
    JSON.stringify(data),
    
    JSON.stringify(error),
  );*/

  export const getOrders = async (days, category) => {
    let querySnapshot;

    querySnapshot = await firestore()
    .collection('orders')
      .orderBy('entryAt')
      .get();

      let entries = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
      });
    
      if (category && category.id) {
        entries = entries.filter(entry => entry.category.id === category.id);
      }
    
      return entries;
    };

    export const deleteOrder = async value => {
      let data = {};
    const {id} = value;
   
      try {
          data = {
            id: id,
                       
          };
        await firestore()
        .collection('orders')
        .doc(data.id)
        .delete();
    } catch (error) {

    }
      
  };