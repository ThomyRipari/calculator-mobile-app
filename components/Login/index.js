import React, { Component } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

class Login extends Component { 
	state = {username: "", password: ""};

	checkLogin = () => {
		const { username, password } = this.state;

		if (username === "admin" && password === "admin") {
			this.props.navigation.navigate('calculator');
		} else {
			Alert.alert('Error', 'Username or Password wrong', [{
				text: 'OK'
			}])
		}
	}

	render() {
		return (
			<View>
				<TextInput placeholder="Username" onChangeText={text => this.setState({username: text})} />
				<TextInput placeholder="Password" onChangeText={text => this.setState({password: text})} secureTextEntry={true} />
				<Button title="LOGIN" onPress={this.checkLogin} />
			</View>
		)
	}

}

export default Login;