import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, IconButton , Button, Menu } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


const SignInPage = () => {
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
			   left = {<TextInput.Icon name ="email" />}
			   /> 

            <TextInput style={styles.input} 
             secureTextEntry 
			 right={<TextInput.Icon name="eye" />}
            label="Password"
			 type="outline"
			 left = {<TextInput.Icon name ="lock" />}
			 
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
					style={styles.button}
					icon="login"
					color="white"
					onPress={() => navigation.navigate('fireStationLogged')}
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
