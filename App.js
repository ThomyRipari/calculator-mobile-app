import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>11*11</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
          </View>
          <View style={styles.operations}>
            <Button title="+" />
            <Button title="+" />
            <Button title="+" />
            <Button title="+" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  resultText: {
    fontSize: 30,
    color: 'white'
  },

  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  calculationText: {
    fontSize: 24,
    color: 'white'
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
    backgroundColor: 'yellow',
    alignItems: 'stretch',
    justifyContent: 'space-around'    
  }

});
