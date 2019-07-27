import React, { Component, useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

const Login = (props) => { 
	
	const [ state, setState ] = useState({
		username: '',
		password: ''
	})

	const checkLogin = () => {
		const { username, password } = state;

		if (username === "admin" && password === "admin") {
			props.navigation.navigate('calculator');
		} else {
			Alert.alert('Error', 'Username or Password wrong', [{
				text: 'OK'
			}])
		}
	}

	return (
		<View>
			<TextInput placeholder="Username" onChangeText={text => setState(prev => ({...prev, username: text}))} />
			<TextInput placeholder="Password" onChangeText={text => setState(prev => ({...prev, password: text}))} secureTextEntry={true} />
			<Button title="LOGIN" onPress={checkLogin} />
		</View>
	)

}

export default Login;