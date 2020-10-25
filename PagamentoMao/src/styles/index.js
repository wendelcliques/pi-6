import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({

    container: {
        flex: 1,
      // justifyContent: 'center',
     //   alignContent: 'center',
        backgroundColor: Colors.dark,
    },
carouselItemContainer: {
    
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#3498db',
    borderRadius: 10,
    //height: 200,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    //marginRight: 10,
  // marginLeft: 90,
    //justifyContent: 'center',
    //alignContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
},

carouselItemTitle: {
    alignItems:'center',
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
},

carouselItemImage: {
    flex: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 130,
    borderRadius: 4,
},

listadeprodutos: {
    flex: 1,
    backgroundColor: '#3498db',
},
});

export default styles