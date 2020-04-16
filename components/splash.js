import React, {Component} from 'react'
import {StyleSheet, Text, View , Image} from 'react-native'
export default class Splash extends Component {
    

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source= {require('../image/logo.png')}></Image>
                <Text style={styles.title}>Welcome to demo app</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEE8EF',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0088A9',
        marginTop:20
    },
    logo: {
        width: 150,
        height: 150,
    }
})