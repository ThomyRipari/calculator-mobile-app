import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}></View>
        <View style={styles.calculation}></View>

        <View style={styles.buttons}>
          <View style={styles.numbers}></View>
          <View style={styles.operations}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  result: {
    flex: 2,
    backgroundColor: 'red'
  },

  calculation: {
    flex: 1,
    backgroundColor: 'green'
  },

  buttons: {
    flex: 7,
    flexDirection: 'row'
  },

  numbers: {
    flex: 2,
    backgroundColor: 'black'
  },

  operations: {
    flex: 1,
    backgroundColor: 'yellow'
  }

});
