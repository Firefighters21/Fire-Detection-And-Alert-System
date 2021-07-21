import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, IconButton , Button, Menu } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LinearGradient } from 'expo-linear-gradient';
import { db, auth } from '../firebase/firebase';


const SignInPage = () => {
	const navigation = useNavigation();
	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);
	const [visible, setVisible] = React.useState(false);
	const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: async (values) => {
			const user = await db.collection('users').doc(values.email).get();
			if (!user.exists || !user.data().isFireStation){
				alert('User is not registered as fire station')
				return
			}
			auth.signInWithEmailAndPassword(values.email, values.password)
			.then((userCredential) => {
				// Signed in
				return navigation.navigate('fireStationLogged')
			  })
		.catch((error) => {
		  let errorMessage = '';
		  var errorCode = error.code;
		  if(errorCode === "auth/invalid-email") errorMessage = "Please enter your email."
		  else errorMessage=error.message;
		  alert(errorMessage )
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
			color="white"
				icon="arrow-left-circle"
				onPress={() => {
					if (navigation.canGoBack()) {
						navigation.goBack();
					}
				}}
				style={styles.backIcon}
				size={40}
			/>

			<Text style={styles.text}>Sign in as fire station</Text>

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
					secureTextEntry
					right={<TextInput.Icon name="eye"  />}
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
	error: {
		color:'blue',
	   fontSize: 18,
	},
	button: {
		marginTop: 30,
		padding: 5,
		width: 350,
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
