import React, {Component } from 'react'
import {StyleSheet, Alert, Text, View, Image,TouchableWithoutFeedback, StatusBar,TextInput,SafeAreaView,Keyboard,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
// import firebase from './react-native-firebase'
// import button from 'react-native-button'
import firebaseApp from '../components/firebaseConfig'
import firebase from 'firebase'
import 'firebase/auth'
// firebase.initializeApp(config);
import AppContainer from './stackNavigation'


var firebaseConfig = {
    apiKey: "AIzaSyAfgtzblKfIzZ84JSfj-ATSkChzhQe7lxc",
    authDomain: "demoreact-5ab68.firebaseapp.com",
    databaseURL: "https://demoreact-5ab68.firebaseio.com",
    projectId: "demoreact-5ab68",
    storageBucket: "demoreact-5ab68.appspot.com",
    messagingSenderId: "978140364693",
    appId: "1:978140364693:web:c88d6ccb0ea98e630e009c",
    measurementId: "G-5XFVQK2SEP"
  };

//    firebase.initializeApp ( firebaseConfig );
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }




export default class Login extends Component {
    constructor(props){
        super (props);
        this.unsubscriber =null;
        this.state = {
            isAuthenticated: false,
            typeEmail: '',
            typePassword: '',
            user: null,
            status: false,
        }
    }
    onLogin = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.typeEmail, this.state.typePassword)
        .then ((loginUser) => {
            this.setState({user: loginUser})
            Alert.alert(
                "Alert Title",
                "Đăng Nhập thành công",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
        }).catch(function(error) {
            console.log('Login fail', error)
            Alert.alert(
                "Alert Title",
                "Đăng Nhập thất bại",
            )
          });
    }
    onRegister = () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.typeEmail, this.state.typePassword)
            .then ((loginUser) => {
                this.setState({user: loginUser})
                console.log('đăng kí thành công ')
                Alert.alert(
                    "Alert Title",
                    "Đăng kí thành công",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                  );

            }).catch(function(error) {
                console.log('Register fail', error)
              });  
    }
    render(){
        return(

            <AppContainer/>
        //    <SafeAreaView>
        //        <KeyboardAvoidingView behavior='padding'>
        //         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        //             <View style={styles.logoContainer} >
        //                 <Image style={styles.logo} source= {require('../image/logo.png')}></Image>
        //                 <Text style={styles.title}>Account Infomartion</Text>
        //                 <View style={styles.infoContainer}>
        //                     <TextInput style={styles.input}
        //                         placeholder="Enter username"
        //                         placeholderTextColor='#0088A8'
        //                         keyboardType='email-address'
        //                         returnKeyType='next'
        //                         autoCapitalize = "none"
        //                         autoCorrect={false}
        //                         onSubmitEditing = {()=> this.refs.txtPassword.focus()}
        //                         onChangeText= {
        //                             (Text) =>{
        //                                 this.setState({typeEmail: Text});
        //                             }
        //                         } 
        //                     />
        //                     <TextInput style={styles.input}
        //                         placeholder="Enter password"
        //                         placeholderTextColor='#0088A8'
        //                         keyboardType='email-address'
        //                         returnKeyType='next'
        //                         autoCorrect={false}
        //                         secureTextEntry= {true}
        //                         returnKeyType = 'go'
        //                         ref={"txtPassword"}
        //                         onChangeText= {
        //                             (Text) =>{
        //                                 this.setState({typePassword: Text});
        //                             }
        //                         }
        //                     />
        //                     <TouchableOpacity style={styles.buttonContainer} onPress={this.onLogin} >
        //                         <Text style={styles.button}>Sign In</Text>
        //                     </TouchableOpacity>
        //                     <TouchableOpacity style={styles.buttonContainer} onPress={this.onRegister} >
        //                         <Text style={styles.button}>Register</Text>
        //                     </TouchableOpacity>

        //                 </View>
        //             </View>
        //         </TouchableWithoutFeedback>
        //        </KeyboardAvoidingView>       
        //    </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: { 
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#DEE8EF',
        
    },
    
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        width: 300

    },
    logo:{
        width: 100,
        height: 100,
        marginBottom: 20,
       
    },
    title: {
        color: '#0088A9',
        alignItems:'center',
        fontSize: 18,
        opacity: 0.9,
    },
    infoContainer: {
        marginTop: 50
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 0,
        // height:300,
        // backgroundColor: 'red',
        // opacity: 0.2
    },
    input: {
        height:40,
        backgroundColor: '#9AD0DA',
        opacity: 0.9,
        borderColor: "red",
        borderRadius: 20,
        marginLeft: 20,
        paddingHorizontal: 10,
        marginBottom: 10
       
    },
    button:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    
        
    
    },
    buttonContainer:{
        backgroundColor: '#0D5061',
        paddingVertical:5,
        borderRadius: 20,
        justifyContent: 'center',
        textAlign: 'center',
        width: 280,
        marginLeft: 20,
        marginBottom: 10

    }
    
})