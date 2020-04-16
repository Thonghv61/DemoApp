import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

  
export default class HistoryScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>HistoryScreen</Text>
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