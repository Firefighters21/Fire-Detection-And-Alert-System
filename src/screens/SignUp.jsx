import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, IconButton  ,Menu,Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpPage = () => {
	const navigation = useNavigation();
	const [visible, setVisible] = React.useState(false);
	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);
	
	return (
		<View style={styles.root}>
			<LinearGradient
				colors={['#FFAB07', '#FF7A00', '#FF5C00']}
				style={styles.gradient}
				start={{ x: 0.0, y: 0.0 }}
				end={{ x: 1.0, y: 1.0 }}
			>
			<StatusBar style="fade" />

			<IconButton
			color ="white"
				icon="arrow-left-circle"
				onPress={() => {
					if (navigation.canGoBack()) {
						navigation.goBack();
					}
				}}
				style={styles.backIcon}
				size={40}
			/>
			<Text style={styles.text}>CREATE YOUR ACCOUNT</Text>

			<TextInput
				style={styles.input}
				label="Username"
				type="outline"
				left={<TextInput.Icon name="account" />}
			/>

			<TextInput
				style={styles.input}
				label="Email"
				type="outline"
				left={<TextInput.Icon name="email" />}
			/>

			<TextInput
				style={styles.input}
				secureTextEntry
				right={<TextInput.Icon name="eye" />}
				label="Password"
				type="outline"
				left={<TextInput.Icon name="lock" />}
			/>

			<TextInput
				style={styles.input}
				label="Phone Number"
				type="outline"
				left={<TextInput.Icon name="phone" />}
			/>

			<TextInput
				style={styles.input}
				label="FiDAS ID"
				type="outline"
				left={<TextInput.Icon name="firework" />}
			/>
			<Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
		  <Button 
			     color= "white"
			  	 mode="contained" 
				   onPress={openMenu}>Please select your fire station
				   </Button>
				   }
		  >
          <Menu.Item onPress={() => {}} title="KNUST Fire Station" />
          <Menu.Item onPress={() => {}} title="Bomso Fire Station" />
        </Menu>

			<Button
			mode="contained"
			color ="white" 
			uppercase ={false}
			style={styles.button}
			 onPress={() => navigation.navigate('SignUP')} 
			>
			 SIGN UP	
			</Button>

			<Button color="white" title="Sign Up" onPress={() => navigation.navigate('')} />
			<Button
				color="white"
				title="click here to sign in"
				onPress={() => navigation.navigate('login')}
			/>

			
			<Button
					color="white"
					onPress={() => navigation.navigate('login')}
					style={styles.signup}
					icon="arrow-right-thick"
				>
					<Text style={styles.signUpTxt}>Sign in</Text>
				</Button>
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
	
	},
	gradient: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FF6300',
		position: 'relative',
	},

	button: {
		marginTop: 10,
		padding: 5,
		width: 350,
	},

	signUpTxt: {
		fontSize: 22,
	},
	signup: {
		position: 'absolute',
		top: 40,
		right: 20,
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 30,
		borderRadius: 5,
	},

	backIcon: {
		position: 'absolute',
		top: 10,
		left: 5,
	},

	input: {
		borderWidth: 1,
		width: 350,
		textAlign: 'left',
		fontSize: 20,
		backgroundColor: '#ffffff',
		marginBottom: 10,
	},
});

export default SignUpPage;
