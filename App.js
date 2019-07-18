import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {

  createNumbersRows = () => {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.', '=']];

    for (let i = 0; i < 4; i++) {
      let buttons = [];

      for (let j = 0; j < 3; j++) {
        buttons.push(
          <TouchableOpacity key={nums[i][j]} style={styles.touchButtons}>
            <Text style={styles.numberButtonsText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }

      rows.push(<View key={i} style={styles.row}>{buttons}</View>);
    }

    return rows;
  }

  createOperationsButtons = () => {
    let buttons = [];
    let operations = ["+", "-", "*", "/"];

    for(let i = 0; i < 4; i++) {
      buttons.push(
        <TouchableOpacity key={i} style={styles.touchButtons}>
            <Text style={styles.operationsButtonsText}>{operations[i]}</Text>
        </TouchableOpacity>
      )
    }

    return buttons;
  }

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
            {this.createNumbersRows()}
          </View>
          <View style={styles.operations}>
            {this.createOperationsButtons()}
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
    backgroundColor: 'yellow'
  },

  touchButtons: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  numberButtonsText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },

  operationsButtonsText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'   
  },

  operations: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'space-around'    
  }

});
