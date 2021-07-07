import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet,Image, Button} from 'react-native';
import { TextInput, IconButton  } from 'react-native-paper';
import icon from '../../assets/icon.png';

const LoginPage = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>

         <Image source={icon} style={styles.logo} />
		

			<Text style={styles.text}>SIGN IN TO YOUR ACCOUNT</Text>
			<TextInput 
			style={styles.input} 
			 label="Email"
			 type = "outline"
			 left={<TextInput.Icon name="email" />}

			/> 

		    <TextInput 
			style={styles.input}
			 label="Password" 
			secureTextEntry 
		    right={<TextInput.Icon name="eye" />}
			type = "outline"
			left = {<TextInput.Icon name ="lock" />}
			
			  />
			  
			  <Button
				mode="contained"
				style={styles.button}
				icon="login"
				color="white"
				
			
			title=	"Login"
			/>

			 <Button
				uppercase={false}
				style={styles.forgotPassword}
				onPress={() => navigation.navigate('forgot-password')}
                color="white"
				title = "Forgot your password?"
			/>

		
            <Button  color="white" title="Sign in as fire station" onPress={() => navigation.navigate('SignIn')} /> 
			<Button color="white" title="Go to home page"  onPress={() => navigation.navigate('auth')} />
			<Button color="white" title="sign up" onPress={() => navigation.navigate('SignUp')} />
		</View>

		
	);
};


const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
		backgroundColor: '#FF6300',
		marginBottom:-150
		
	},

	top: {
		height : 20,
		position: 'absolute',


	},
	
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom:10,
		borderRadius: 500
	},

	button: {
		marginTop: 30,
		width: '100%',
		padding: 5,
	},

	forgotPassword: {
		alignSelf: 'flex-end',
	},

	logo: {
		position: 'absolute',
		top: 30,
		left: 110,
		width: 200,
		height: 200
	},

	input : {
		borderWidth :1, 
		width : 350,
		textAlign : 'center',
		fontSize: 20,
		fontSize: 22,
		backgroundColor: '#ffffff',
		marginBottom:10
	}	

});

export default LoginPage;
