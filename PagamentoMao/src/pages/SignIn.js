import React from 'react'
import { View, Text, Button } from 'react-native'
import LoginUsuarioModal from './LoginUsuarioModal'





const SignIn = ({ navigation }) => {

    function SignIn() {
        return (
            <View>
                <Text>SignIn</Text>
                <Button 
                    title="Cliente"
                    onPress={() => navigation.navigate('Cliente')}
                />

                <Button 
                    title="Vendedor"
                    onPress={() => navigation.navigate('Vendedor')}
                />

                <Button 
                    title="Administrador"
                    onPress={() => navigation.navigate('Administrador')}
                />

                <LoginUsuarioModal />
            </View>
        );
    }

    


    return (
        <View>
            <SignIn />
        </View>
    )
}

export default SignIn
