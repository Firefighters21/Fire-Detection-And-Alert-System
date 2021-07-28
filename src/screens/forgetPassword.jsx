import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,Image} from 'react-native';
import { IconButton, TextInput, Button} from 'react-native-paper';
import icon from '../../assets/icon.png';
import { LinearGradient } from 'expo-linear-gradient';



const ForgetpwdPage = () => {
	const navigation = useNavigation();

	return (
        <View  style={styles.root}>
			<LinearGradient
				colors={['#FFAB07', '#FF7A00', '#FF5C00']}
				style={styles.gradient}
				start={{ x: 0.0, y: 0.0 }}
				end={{ x: 1.0, y: 1.0 }}
			>
            <IconButton 						
			    color ="white"
				icon="arrow-left-circle"
				onPress={() => {
					if (navigation.canGoBack()) {
						navigation.goBack();
					}
				}}
				style={styles.backIcon}
				size={50}
			/>
            <Image source={icon} style={styles.logo} />

			<Text style={styles.title}>Enter Email To Request Password Reset</Text>

			<TextInput
				label="Email"
				type="outline"
				style={styles.input}
				left={<TextInput.Icon name="email" />}
			/>

			<Button
				mode="contained"
				style={styles.button}
				onPress={() => navigation.navigate('')}
				color="white" 	
			>
				Request Password reset code
			</Button>
             
            <StatusBar style="fade" />
			</LinearGradient>     
        </View>
		
		
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		marginBottom: -50,
	},

	top: {
		height : 10,
		position: 'absolute',
	},

	gradient: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FF6300',
		position: 'relative',
	},
    
	backIcon: {
		position: 'absolute',
		top: 10,
		left: 5,
	},
	
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
		marginBottom:10,
		borderRadius: 500
	},

	button: {
		marginTop: 30,
		width: '90%',
		padding: 5,
	},

	forgotPassword: {
		alignSelf: 'flex-end',
	},

    title: {
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		textAlign: 'center',
		letterSpacing: 1,
		color: '#fff',
		marginBottom: 10,
		borderRadius: 500,
	
	},

	logo: {
		position: 'absolute',
		top: 30,
		left: 110,
		width: 200,
		marginTop: 40,
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




export default ForgetpwdPage;
