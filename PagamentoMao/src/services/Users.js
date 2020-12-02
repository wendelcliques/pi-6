import {Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export const getDefaultUsers = () => {
  return [
      {
        name: 'Vendedor 1',
           
        
      },

      {
        name: 'Vendedor 2',
      },

      {
        name: 'Vendedor 3',
      },

  ];
};

export const addUsers = async value => {
    let data = {};

    const {name} = value;
    const {hierarchy} = value;
    const {category} = value;
    const {password} = value;
    
  
    console.log('addEntry :: value: ', JSON.stringify(value));
  
    try {
      data = {
        name: name,
        hierarchy: hierarchy,
        category: category,
        password: password,
        
        isInit: false,
    
      };
  
      await firestore()
        .collection('users')
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

  export const updateUsers = async value => {
   
  
    console.log('updateEntry :: value: ', JSON.stringify(value));
    let data = {};
    const {id} = value;
    const {name} = value;
    const {hierarchy} = value;
    const {category} = value;
    
  
    

    try {
      data = {
        id: id,
        name: name,
        hierarchy: hierarchy,
        category: category,
        
        isInit: false,
        
      };

      console.log('updateEntry :: data: ', JSON.stringify(data));
      
     await firestore()
     .collection('users')
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

  export const getUsers = async (days, category) => {
    let querySnapshot;

    querySnapshot = await firestore()
    .where('visibility', '==', 'public')
    .collection('users')
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

    export const deleteUsers = async value => {
      let data = {};
    const {id} = value;
   
      try {
          data = {
            id: id,
                       
          };
        await firestore()
        .collection('users')
        .doc(data.id)
        .delete();
    } catch (error) {

    }
      
  };