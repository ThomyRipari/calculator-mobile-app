import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

/* Import Components */
import Calculator from './components/Calculator';
import Login from './components/Login';

class Home extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View>
        <Text>Welcome to the APP</Text>
        <Button title="GO TO LOGIN FORM" onPress={() => this.props.navigation.navigate('login')} />
      </View>
    )
  }
}

const rootNavigator = createStackNavigator({
  home: Home,
  login: Login,
  calculator: Calculator
})

const App = createAppContainer(rootNavigator);

export default App;