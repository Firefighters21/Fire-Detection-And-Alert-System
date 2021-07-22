import React ,{useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';



const LoginPage = () => {
	const navigation = useNavigation();
	const [isSecureEntry,setIsSecureEntry] = useState(true);
	
	const { values, errors,handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			firebase.auth().signInWithEmailAndPassword(values.email, values.password)
		.then((userCredential) => {
		  // Signed in
		  return navigation.navigate('logged')
		})
		.catch((error) => {
		  let errorMessage = '';
		  var errorCode = error.code;
		  if(errorCode === "auth/invalid-email") errorMessage = "Please enter your email."
		  else errorMessage=error.message;
		  alert(errorMessage)
		  console.log('error --- ',{errorCode,errorMessage})
		});
		},
		validationSchema: Yup.object({
			email: Yup.string().email().required(),
			password: Yup.string().min(8).max(32).required(),
		}),
	});
	
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
					value={values.email}
				    error={!!errors.email}
				    onChangeText={handleChange('email')}
					// onChangeText={(theEmail) => setEmail(theEmail)}
				/>
				<Text style={styles.error}>{errors.email}</Text>
				<TextInput
					style={styles.input}
					label="Password"
					secureTextEntry={isSecureEntry}
					right={
							<TextInput.Icon  name="eye" onPress ={()=>
							setIsSecureEntry ((prev)=>!prev)
							} 	
						/>
					}
					type="outline"
					left={<TextInput.Icon name="lock"  />}
					value={values.password}
				    error={!!errors.password}
				    onChangeText={handleChange('password')}
					// onChangeText={(thePass) => setPassword(thePass)}
				/>
				<Text style={styles.error}>{errors.password}</Text>
				<Button
					mode="contained"
					style={styles.button}
					icon="login"
					color="white"
					onPress={handleSubmit}
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
		     		uppercase={false}
					color="white"
					style={styles.SigninAsFireStation}
					onPress={() => navigation.navigate('SignIn')}
				>
					or Sign in as fire station ?
				</Button>	

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
	 error: {
		 color:'blue',
		fontSize: 18,
	},
	forgotPassword: {
		alignSelf: 'flex-end',
		marginRight: 25,
		marginTop: 10,
	},
	SigninAsFireStation: {
		alignSelf: 'flex-end',
		marginRight: 25,
		marginTop: 50,
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
