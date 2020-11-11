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

  export const upEntry= async value => {
   
  
    console.log('upEntry :: value: ', JSON.stringify(value));

  let data = {};
    try {
      data = {
        
        amount: value.amount,
        description: value.description,
        category: value.category,
       
        entryAt: value.entryAt || new Date(),
        
        isInit: false,
    
      };
  
      await firestore()
        .collection('entries')
        .doc(value.id)
        .update(data);
    } catch (error) {
      console.error(
        'upEntry :: error on save object: ',
        JSON.stringify(data),
        JSON.stringify(error),
      );
      Alert.alert('Erro', 'Houve um erro ao atualizar este lançamento.');
    }
  
    return data;
  };

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