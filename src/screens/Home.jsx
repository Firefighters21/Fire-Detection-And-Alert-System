import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePage = () => {
	return (
		<View style={styles.root}>
			<Text style={styles.text}>AUTHENTICATED HOME PAGE</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
	},
});

export default HomePage;
