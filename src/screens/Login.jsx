import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Button,TextInput,input } from 'react-native';

const LoginPage = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>
			<Text style={styles.text}>SIGN IN TO YOUR ACCOUNT</Text>
			
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

});

export default LoginPage;
