import { StyleSheet } from 'react-native';

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


export default styles;