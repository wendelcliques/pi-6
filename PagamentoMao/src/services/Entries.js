import {Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export const addEntry = async value => {
    let data = {};

    const {amount} = value;
    const {description} = value;
    const {category} = value;
  
    console.log('addEntry :: value: ', JSON.stringify(value));
  
    try {
      data = {
        amount: amount,
        description: description,
        category: category,
       
        entryAt: new Date(),
        
        isInit: false,
    
      };
  
      await firestore()
        .collection('entries')
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

  export const updateEntry = async value => {
   
  
    console.log('updateEntry :: value: ', JSON.stringify(value));
    let data = {};
    const {id} = value;
    const {amount} = value;
    const {description} = value;
    const {category} = value;
  
    

    try {
      data = {
        id: id,
        amount: amount,
        description: description,
        category: category,
       
       
        
        isInit: false,
        
      };

      console.log('updateEntry :: data: ', JSON.stringify(data));
      
     await firestore()
        .collection('entries')
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

  export const getEntries = async (days, category) => {
    let querySnapshot;

    querySnapshot = await firestore()
      .collection('entries')
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

    export const deleteEntry = async value => {
      let data = {};
    const {id} = value;
   
      try {
          data = {
            id: id,
                       
          };
        await firestore()
        .collection('entries')
        .doc(data.id)
        .delete();
    } catch (error) {

    }
      
  };