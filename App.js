import React,{Component} from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import Splash from './components/splash'
import Login from './components/login'
import TabNavigation from './components/TabNavigation'
import AppContainer from './components/stackNavigation'
import tesTab from './components/tabnavi'


export default class App extends Component {
    constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};

    setTimeout(()=> {
      this.setState({currentScreen : 'Login'})
    },2000)
  }  
  render(){
    // const {currentScreen} = this.state
    let mainScreen = this.state.currentScreen === 'Splash' ? <Splash/> : <Login/>
       return (
          // <View style={styles.container}>
          //   {mainScreen}
          // </View>

          // <tesTab/>
          // <TabNavigation/>
          // <AppContainer/>
          <TabNavigation/>
          
       )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


