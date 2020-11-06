import {StyleSheet} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';
import Colors from '../styles/Colors';

const styles = StyleSheet.create({
containerSaldo: {
alignItems: 'center',
},
    container: {
        flex: 1,
       // justifyContent: 'center',
     //   alignContent: 'center',
        backgroundColor: Colors.background,
    },

    containerLista: {
        backgroundColor: Colors.asphalt,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        margin: 5,
        padding: 8,
    },

    containerListaTitulo: {
        fontSize: 12,
        color: Colors.white,
        marginBottom: 5,
    },

    actionContainerLista: {
        flexDirection: 'row',
    },

    actionLabel: {
        flex: 1,
        fontSize: 12,
        color: Colors.white,
    },

    actionButton: {
        flexDirection: 'row',
    },
    actionButtonText: {
        fontSize: 12,
        color: Colors.white,
    },

    containerListaProdutos: {
            flex: 1,
            flexDirection: 'row',
    },

    containerListaProdutosDescription: {
backgroundColor: Colors.blue,
flex: 1,
    },

    containerListaProdutosValue: {
        backgroundColor: Colors.red,
    },

    saldoCliente: {
        marginTop: 10,
        height: 80,
        width: 340,
        alignSelf: 'center',
        borderRadius: 10,
    },

    saTexto: {
        fontSize: 14,
        color: Colors.white,
    },
    saValor: {
        fontSize: 26,
        color: Colors.white,
    },
    saExtrato: {
        fontSize: 14,
        color: Colors.white,
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
    backgroundColor: Colors.background,
},
});

export default styles