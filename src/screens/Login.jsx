import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const LoginPage = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>
			<LinearGradient
				colors={['#FFAB07', '#FF7A00', '#FF5C00']}
				style={styles.gradient}
				start={{ x: 0.0, y: 0.0 }}
				end={{ x: 1.0, y: 1.0 }}
			>
				<StatusBar style="fade" />
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
				<Button
					mode="contained"
					style={styles.button}
					icon="login"
					color="white"
					onPress={() => navigation.navigate('logged')}
				>
					LOGIN
				</Button>
				<Button
					uppercase={false}
					style={styles.forgotPassword}
					onPress={() => navigation.navigate('forgot-password')}
					color="white"
				>
					Forgot Password?
				</Button>
				<Button
					color="white"
					title="Sign in as fire station"
					onPress={() => navigation.navigate('SignIn')}
				/>
				<Button
					color="white"
					onPress={() => navigation.navigate('SignUp')}
					style={styles.signup}
					icon="arrow-right-thick"
				>
					<Text style={styles.signUpTxt}>Sign up</Text>
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
	text: {
		fontSize: 32,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		textAlign: 'center',
		letterSpacing: 1,
		color: '#fff',
		marginBottom: 40,
		borderRadius: 500,
	},
	button: {
		marginTop: 30,
		padding: 5,
		width: 350,
	},
	signUpTxt: {
		fontSize: 22,
	},
	forgotPassword: {
		alignSelf: 'flex-end',
		marginRight: 25,
		marginTop: 10,
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
		top: 60,
		right: 20,
	},
});

export default LoginPage;
