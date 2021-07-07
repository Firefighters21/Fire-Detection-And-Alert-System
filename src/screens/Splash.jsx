import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';;

const SplashScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		setTimeout(() => navigation.navigate('login'), 1500);
	}, []);

	return (
		<View style={styles.root}>
			 <StatusBar style="fade" />
			<Text style={styles.text}>FiDAS</Text>
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

export default SplashScreen;


