import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,Image, Button} from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import icon from '../../assets/icon.png';



const ForgetpwdPage = () => {
	const navigation = useNavigation();

	return (
        <View  style={styles.root}>
            <IconButton
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
				icon={() => <Icon name="lock-open" size={25} />}
				color="white"
			
			  title ="Request Password reset code"	
			/>
            
            <StatusBar style="fade" />
            
        </View>
		
		
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
		backgroundColor: '#FF6300',
		marginBottom:-160
		
	},

	top: {
		height : 20,
		position: 'absolute',


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
		width: '100%',
		padding: 5,
	},

	forgotPassword: {
		alignSelf: 'flex-end',
	},

    title: {
		fontSize: 25,
		textAlign: 'center',
		marginBottom: 20,
		fontWeight: 'bold'
    },

	logo: {
		position: 'absolute',
		top: 100,
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




export default ForgetpwdPage;
