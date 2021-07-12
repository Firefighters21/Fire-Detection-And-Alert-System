import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { TextInput, Menu } from 'react-native-paper';
import icon from '../../assets/icon.png';
import { StatusBar } from 'expo-status-bar';

const LoginPage = () => {
	const navigation = useNavigation();

	const [visible, setVisible] = React.useState(false);

	const openMenu = () => setVisible(true);

	const closeMenu = () => setVisible(false);

	return (
		<View style={styles.root}>
			<StatusBar style="fade" />

			{/* <Image source={icon} style={styles.logo} /> */}

			<Text style={styles.text}>Sign into your account</Text>
			<TextInput
				style={styles.input}
				label="Email"
				type="outline"
				left={<TextInput.Icon name="email" />}
			/>

			<TextInput
				style={styles.input}
				label="Password"
				secureTextEntry
				right={<TextInput.Icon name="eye" />}
				type="outline"
				left={<TextInput.Icon name="lock" />}
			/>

			<Menu
				visible={visible}
				onDismiss={closeMenu}
				anchor={
					<Button
						onPress={openMenu}
						color="white"
						title="Please select your fire station"
						style={styles.menu}
					/>
				}
			>
				<Menu.Item onPress={() => {}} title="KNUST fire Station" />
				<Menu.Item onPress={() => {}} title="Bomso fire Station " />
			</Menu>

			<Button
				mode="contained"
				style={styles.button}
				icon="login"
				color="white"
				onPress={() => navigation.navigate('logged')}
				title="Login"
			/>

			<Button
				uppercase={false}
				style={styles.forgotPassword}
				onPress={() => navigation.navigate('forgot-password')}
				color="white"
				title="Forgot your password?"
			/>
			<Button
				color="white"
				title="Sign in as fire station"
				onPress={() => navigation.navigate('SignIn')}
			/>
			<Button
				color="white"
				title="sign up"
				onPress={() => navigation.navigate('SignUp')}
				style={styles.signup}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

		backgroundColor: '#FF6300',
		marginBottom: 0,
		position: 'relative',
	},

	menu: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		marginBottom: 0,
		padding: 5,
	},

	text: {
		fontSize: 24,
		fontWeight: 'bold',
		letterSpacing: 1,
		color: '#fff',
		marginBottom: 40,
		borderRadius: 500,
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
		top: 40,
		left: 110,
		width: 150,
		height: 150,
		marginTop: -5,
	},

	input: {
		borderWidth: 1,
		width: 350,
		textAlign: 'left',
		fontSize: 20,
		fontSize: 22,
		backgroundColor: '#ffffff',
		marginBottom: 10,
	},

	signup: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
});

export default LoginPage;
