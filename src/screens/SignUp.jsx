import React ,{useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, IconButton  ,Menu,Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LinearGradient } from 'expo-linear-gradient';
import {db } from '../firebase/firebase';
import firebase from 'firebase';

    const SignUpPage = () => {
	const navigation = useNavigation();
	const [isSecureEntry,setIsSecureEntry] = useState(true);
	const [visible, setVisible] = React.useState(false);
	const [firestation, setFireStation] = React.useState('Please select your firestation');
	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);

	const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			username:'',
			phone:'',
			password: '',
			GPS: '',
			
		},
		onSubmit: (values) => {
			//sign the user up and save his details to firebase
		firebase.auth()
		.createUserWithEmailAndPassword(values.email, values.password)
		.then((user) => {
			console.log('sending this details to firebase ',{
				...values,firestation
			 })
			
			 //todo: save the user details to firebase
			db.collection("users").add({
               email:values.email,
			   username:values.username,
			   phone:values.phone,
			   firestation
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
			return navigation.navigate('logged')
		})
		.catch(error => {
		  let errorMessage = '';
		  var errorCode = error.code;
		  if(errorCode === "auth/invalid-email") 
		  errorMessage = "Please enter your email. Try again"
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
				value={values.username}
				error={!!errors.username}
				left={<TextInput.Icon name="account" />}
				onChangeText={handleChange('username')}
			/>

			<TextInput
				style={styles.input}
				label="Email"
				keyboardType='email-address'
				type="outline"
				left={<TextInput.Icon name="email" />}
				value={values.email}
				error={!!errors.email}
				onChangeText={handleChange('email')}
			/>

			<TextInput
				style={styles.input}
				secureTextEntry={isSecureEntry}
					right={
							<TextInput.Icon  name="eye" onPress ={()=>
							setIsSecureEntry ((prev)=>!prev)
							} 	
						/>
					}
				label="Password"
				type="outline"
				value={values.password}
				error={!!errors.email}
				left={<TextInput.Icon name="lock" />}
				onChangeText={handleChange('password')}
			/>

			<TextInput
				style={styles.input}
				label="Phone Number"
				keyboardType='numeric'
				type="outline"
				value={values.phone}
				error={!!errors.phone}
				left={<TextInput.Icon name="phone" />}
				onChangeText={handleChange('phone')}
			/>
			<TextInput
				style={styles.input}
				label="GPS Address"
				type="outline"
				value={values.GPS}
				error={!!errors.GPS}
				left={<TextInput.Icon name="fire" />}
				onChangeText={handleChange('GPS')}
			/>
			<Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
		  <Button 
			     color= "white"
			  	 mode="contained" 
				   onPress={openMenu}>{firestation}
			</Button>
			}
		  >
          <Menu.Item onPress={() => {
			  setFireStation('knust-firestation')
			  closeMenu()
			  }} title="KNUST Fire Station" />
          <Menu.Item onPress={() => {
			  setFireStation('bomso-firestation')
			  closeMenu()
			  }} title="Bomso Fire Station" />
        </Menu>

			<Button
			mode="contained"
			color ="white" 
			uppercase ={false}
			style={styles.button}
			 onPress={handleSubmit} 
			>
			 SIGN UP	
			</Button>

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
		marginTop: 20,
	
	},
	gradient: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FF6300',
		position: 'relative',
	},

	button: {
		marginTop: 60,
		padding: 5,
		width: 350,
	},

	signUpTxt: {
		fontSize: 22,
	},
	signup: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 30,
		color: 'white',
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
