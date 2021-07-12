import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput, IconButton  } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';


const SignInPage = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>

          <StatusBar style="fade" />

            <IconButton
				icon="arrow-left-circle"
				onPress={() => {
					if (navigation.canGoBack()) {
						navigation.goBack();
					}
				}}
				style={styles.backIcon}
				size={40}
			/>

			<Text style={styles.text}>SIGN IN AS FIRE STATION</Text>

            <TextInput
			 style={styles.input} 
			  label="Email"
			   type="outline"
			   left = {<TextInput.Icon name ="email" />}
			   /> 

            <TextInput style={styles.input} 
             secureTextEntry 
			 right={<TextInput.Icon name="eye" />}
            label="Password"
			 type="outline"
			 left = {<TextInput.Icon name ="lock" />}
			 
			 /> 
			


			<Button color="white" title="click here to sign in as a user" onPress={() => navigation.navigate('login')}  />
	
			<Button  color="white" title="Go to home page" onPress={() => navigation.navigate('auth')} />
		</View>

		
	);
};


const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
		backgroundColor: '#FF6300',
		marginBottom: -10
	},
	
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom:30,
		borderRadius: 5
	},

	backIcon: {
		position: 'absolute',
		top: 10,
		left: 5,
	},

	input : {
		borderWidth :1, 
		width : 350,
		textAlign : 'left',
		fontSize: 22,
		backgroundColor: '#ffffff',
		marginBottom:10
	}	

});

export default SignInPage;
