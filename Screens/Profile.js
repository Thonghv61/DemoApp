import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export default class ProfileScreen extends React.Component {
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>ProfileScreen</Text>
          <Button
          title="Go to Details"
          onPress={() => navigate('HistoryScreen')}
      />
        </View>
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