import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';

const LoginPage = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>
			<Text style={styles.text}>SIGN IN TO YOUR ACCOUNT</Text>
			<TextInput style={styles.input}
			placeholder = 'Username'
			/> 

			 <TextInput style={styles.input}
			placeholder = 'password'
			/>
			<Text style={styles.text} >Already An Existing User?</Text>

			<Button title="click here to sign up" />
	
			<Button title="Go to home page" onPress={() => navigation.navigate('auth')} />
		</View>

		
	);
};


const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
		backgroundColor: '#FF6300',
	},
	
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
	},

	input : {
		borderWidth :1, 
		width : 300,
		textAlign : 'center',
		fontSize: 20,
		backgroundColor: '#ffffff'
	}	

});

export default LoginPage;
