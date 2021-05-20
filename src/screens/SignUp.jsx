import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';

const signUp = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>
			<Text style={styles.text}>create your account</Text><br /><br />

			<TextInput style={styles.input} placeholder = 'Username'/> <br />

			 <TextInput style={styles.input}placeholder = 'Email'/><br />

             <TextInput style={styles.input}placeholder = 'Password'/><br />

             <TextInput style={styles.input}placeholder = 'Phone Number'/><br />

             <TextInput style={styles.input}placeholder = 'FiDAS ID'/><br />

             
			
	
			<Button title="Go to home page" onPress={() => navigation.navigate('auth')} />
		</View>

		
	);
};


const styles = StyleSheet.create({
	root: {
		
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
		
		backgroundColor: 'rgba(255, 255, 255, 0)'
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

export default LoginPage;
