import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Button, option ,select ,TextInput, } from 'react-native';


const SignUpPage = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>
			<Text style={styles.text}>create your account</Text><br /><br />

			<TextInput style={styles.input} placeholder = 'Username'/> <br />

			 <TextInput style={styles.input}placeholder = 'Email'/><br />

             <TextInput style={styles.input}placeholder = 'Password'/><br />

             <TextInput style={styles.input}placeholder = 'Phone Number'/><br />

             <TextInput style={styles.input}placeholder = 'FiDAS ID'/><br />

			 <select  > 
				  <option>Please enter your fire station</option>
				 <option>KNUST FIRE STATION</option>
				 <option>BOMSO FIRE STATION</option>
			 </select><br />

			 <Button title ="Register  " />

			 <Text style={styles.text}>Already an exixting user ?</Text> <Button title = "click here" onPress={() => navigation.navigate('login')}/>
			
			 
			 <br /><br />

        
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
		width : 300,
		height: 50,
		textAlign : 'center',
		fontSize: 15,
		borderRadius: 5,
		backgroundColor: '#ffffff'
		
	
	}	

});

export default SignUpPage;
