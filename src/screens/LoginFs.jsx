import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';


const LoginFs = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>
			<Text style={styles.text}>Sign in to your account</Text><br /><br />

			<TextInput style={styles.input} placeholder = 'Username'/> <br />

			 <TextInput style={styles.input} type= 'password'
			 placeholder = 'password'/><br />

			     <Button title = "Sign in"/> <br />


		    <Button title = "Create a new account" onPress={() => navigation.navigate('signUp')}/> <br />

			<Button title="forgot your password?" /><br />

			

	
	
			<Button title="Go to home page" onPress={() => navigation.navigate('auth')} />
		</View>

		
	);
};


const styles = StyleSheet.create({
	root: {
		
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
		
		backgroundColor: '#FF6300'
	},
	
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
	},

	input : {
		borderWidth :1, 
		width : 400,
		height: 50,
		textAlign : 'center',
		fontSize: 20,
		backgroundColor: '#ffffff'
		
	
	}	

});

export default LoginFs;
