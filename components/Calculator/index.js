import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

/* Import Styles */
import styles from './styles';

const Calculator = () => {

  const [ state, setState ] = useState({
    calculation: "",
    result: 0
  })

  const validateLastNumber = () => {
    switch(state.calculation.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;

      default:
        return true;
    }
  }

  const onPressNumbers = (value) => {
    if (value === '=') {

      if (validateLastNumber()) 
        setState(prev => ({...prev, result: eval(state.calculation)}))
     
      return;
    }

    setState(prev => ({...prev, calculation: state.calculation + value}))
  }

  const operations = (operation) => {
    switch(operation) {
      case "D":
        let calculationToDelete = state.calculation.split('');
        calculationToDelete.pop();

        setState(prev => ({...prev, calculation: calculationToDelete.join('')}))

        break;

      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = state.calculation.split('').pop();

        if (["+", "-", "*", "/"].indexOf(lastChar) >= 0) return;

        if (state.calculation === "") return;

        setState(prev => ({...prev, calculation: state.calculation + operation}))

      default:
        break;

    }
  }

  const createNumbersRows = () => {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.', '=']];

    for (let i = 0; i < 4; i++) {
      let buttons = [];

      for (let j = 0; j < 3; j++) {
        buttons.push(
          <TouchableOpacity key={nums[i][j]} onPress={() => onPressNumbers(nums[i][j])} style={styles.touchButtons}>
            <Text style={styles.numberButtonsText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }

      rows.push(<View key={i} style={styles.row}>{buttons}</View>);
    }

    return rows;
  }

  const createOperationsButtons = () => {
    let buttons = [];
    let operators = ["D", "+", "-", "*", "/"];

    for(let i = 0; i < 5; i++) {
      buttons.push(
        <TouchableOpacity key={i} onPress={() => operations(operators[i])} style={styles.touchButtons}>
            <Text style={styles.operationsButtonsText}>{operators[i]}</Text>
        </TouchableOpacity>
      )
    }

    return buttons;
  }


  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{state.result}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{state.calculation}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.numbers}>
          {createNumbersRows()}
        </View>
        <View style={styles.operations}>
          {createOperationsButtons()}
        </View>
      </View>
    </View>
  )
}

export default Calculator;