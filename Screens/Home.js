import React, { Component } from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';

import FlatListData from '../data/dataFlatlist'





class FlatListItem extends Component {
  render(){
    return (
      <View stlye= {{ flex: 1, marginTop: 220,}}>
          <Text style ={stlyes.text} >{this.props.item.id}</Text>
          <Text style ={stlyes.text}>{this.props.item.title}</Text>
      </View>
    )
  }
}

const stlyes = StyleSheet.create({
  text: {
    color: '#0D5061',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5
  }
})
export default class HomeScreen extends React.Component {
    
  constructor(props){
    super(props)
    this.state = {
      data:  [],
      isLoading: false,
      page: 1
    }
  }
  static navigationOptions = {
        title: 'Home',
        
  };

  
  // renderRow = ({item}) => {
  //   return (
  //     <View>
  //       <Text>{item.title} thong</Text>
  //     </View>
  //   )
  // }


  componentDidMount(){
    this.getData()
  }
  getData = async () =>{
    const url = "https://jsonplaceholder.typicode.com/photos?_limit=10&_page=" +this.state.page
    
    fetch(url).then((reponse) => reponse.json()) 
    
    .then((reponseJson) => {
      this.setState({
        data: this.state.data.concat(reponseJson)
      })
    })

  }
  // .finally(() => this.setState({isLoading: true}))
  loadmore = () => {
    this.setState({page: this.state.page +1}), this.getData()
  }

    render() {
      // let {isLoading} = this.state
      return (
        <SafeAreaView>

          <View stlye= {{flex: 1, marginTop: 220}}>
          <FlatList  data = {this.state.data}
            renderItem = {({item, index})=>{
              console.log({item});
              return(<FlatListItem item={item} index={index}>
              </FlatListItem>)
            }} 
            refreshing = {this.state.isLoading}
            onRefresh={this.getData}
            onEndReached = {this.loadmore}
            >
           
          
        </FlatList>
        </View>
          
        </SafeAreaView>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });