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