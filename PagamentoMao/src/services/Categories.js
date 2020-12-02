import firestore from '@react-native-firebase/firestore';

export const getDefaultCategories = () => {
    return [
        {
            name: 'Alimentação',
            color: '#1acb9c',
            isDebit: true,
            order: 0,
        },

        {
            name: 'Empréstimos',
            color: '#273c75',
            isCredit: true,
            order: 1,
        },

        {
            name: 'Saldo Inicial',
            color: '#27ae60',
            isInit: true,
            order: 5,
        },

    ];
};

export const getInitCategories = async () => {
    const querySnapshot = await firestore()
        .collection('categories')
        .where('isInit', '==', true)
        .get();

    return {...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id};
};

export const addCategory = async value => {
    let data = {};

    const {name} = value;
    const {user} = value;
    const {photo} = value;
    const {order} = value;
  
    console.log('addEntry :: value: ', JSON.stringify(value));
  
    try {
      data = {
        name: name,
        user: user,
        photo: photo,
       order: order,
       visibility: 'public',
        
        isInit: false,
    
      };
  
      await firestore()
      .collection('categories')
        .add(data);
    } catch (error) {
      console.error(
        'addCategory :: error on save object: ',
        JSON.stringify(data),
        JSON.stringify(error),
      );
      Alert.alert('Erro', 'Houve um erro ao salvar esta barraca.');
    }
  
    return data;
  };

  export const updateCategory = async value => {
   
  
    console.log('updateEntry :: value: ', JSON.stringify(value));
    let data = {};
    const {id} = value;
    const {name} = value;
    const {user} = value;
    const {photo} = value;
    const {order} = value;
    

    try {
      data = {
        id: id,
        name: name,
        user: user,
        photo: photo,
       
        order: order,
        
        isInit: false,
        
      };

      console.log('updateEntry :: data: ', JSON.stringify(data));
      
     await firestore()
     .collection('categories')
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

  export const getCategories = async (days, category) => {
    let querySnapshot;

    querySnapshot = await firestore()
    .where('visibility', '==', 'public')
    .collection('categories')
      .orderBy('order')
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