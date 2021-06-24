import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.root}>
			<Text style={styles.text}>AUTHENTICATED HOME PAGE</Text>
			
            <Button title="Sign in to your account" onPress={() => navigation.navigate('login')} /> 

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

export default HomePage;
