import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';

import styles from '../styles/index';

import {getCategories} from '../services/Categories'

import Images from '../assets/images.jpg';



const CarrosselFlat = () => {
    const barracas = {
        id: null,
        name: null,
        image: null,
     
    };

    const [id, setId] = useState(barracas.id);
const [name, setName] = useState(barracas.name);
const [image, setImage] = useState(barracas.iamge);


const [entries, setEntries] = useState([]);

useEffect(() => {
    async function loadEntries() {
      const data = await getCategories();
      setEntries(data);
    }

    loadEntries();

    console.log('EntryList :: useEffect');
  }, []);

    return (
        <View>
            <FlatList
            horizontal={true}
                  data={barracas}
                  keyExtractor={item => item.id}
                   renderItem={({item}) => (
                    
                     
                     <View style={styles.containerListaProdutos}>
                        <View style={styles.carouselItemImage}>
                        <Image  source={Images} />
                        </View>

                        <View style={styles.containerListaProdutosDescription}>
                          <Text style={styles.entry}>
                            - {item.name} 
                           </Text>
                           <View>
                             <Text>Atualizar</Text>
                             </View>
                        </View>

                        <View style={styles.containerListaProdutosValue}>
                         <Text style={styles.containerListaProdutosValueText}>- ${item.price}</Text>
                        
                        </View>
                      
                      </View>
                     
                   )}
              />
        </View>
    )
}

export default CarrosselFlat
