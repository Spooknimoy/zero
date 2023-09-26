import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Usuarios from '../screens/Usuarios/Usuarios';
import Post from '../screens/Post/Post';
import Home from '../screens/Home/Home';

export default function Router() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Categoria" component={Usuarios} />
                <Stack.Screen name="Produto" component={Post} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})