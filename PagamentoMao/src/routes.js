import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import Administrador from './pages/Administrador';
import AdministradorProdutos from './pages/AdministradorProdutos';
import AdministradorRelatorio from './pages/AdministradorRelatorio';

import Vendedor from './pages/Vendedor';
import VendedorPedidos from './pages/VendedorPedidos';
import VendedorProdutos from './pages/VendedorProdutos';

import Cliente from './pages/Cliente';
import ClienteCarrinho from './pages/ClienteCarrinho';
import ClienteCredito from './pages/ClienteCredito';
import ClienteProduto from './pages/ClienteProduto';

const Tab = createMaterialTopTabNavigator();

function MyTabsCliente() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Produto" component={ClienteProduto} />
        <Tab.Screen name="Carrinho" component={ClienteCarrinho} />
        <Tab.Screen name="Credito" component={ClienteCredito} />
      </Tab.Navigator>
    );
  }

  function MyTabsVendedor() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Pedidos" component={VendedorPedidos} />
        <Tab.Screen name="Produtos" component={VendedorProdutos} />
        
      </Tab.Navigator>
    );
  }

  function MyTabsAdministrador() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Produtos" component={AdministradorProdutos} />
        <Tab.Screen name="Relatório" component={AdministradorRelatorio} />
      </Tab.Navigator>
    );
  }





const Stack = createStackNavigator();


const StackScreens = () => {
return (
    <Stack.Navigator initialRouteName="SignIn">
        
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Cliente" component={MyTabsCliente} />
        <Stack.Screen name="Vendedor" component={MyTabsVendedor} />
        <Stack.Screen name="Administrador" component={MyTabsAdministrador} />
        
    </Stack.Navigator>
);
};

const Routes = () => {
return (
    <NavigationContainer>
        
        <StackScreens />
    </NavigationContainer>
);
};

export default Routes;