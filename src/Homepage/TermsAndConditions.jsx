import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';




const TermsPage = () => {
	const navigation = useNavigation();
   

	return (
		<View style={styles.mainContainer}>
			 <View style={styles.navBar}>
				 <Text style ={styles.text}>TERMS AND CONDITIONS</Text>
    </View>
	<ScrollView>
	<View style={styles.body}>
	
	<Text style={styles.text1}>This FireMeds app is built as a free app for it’s users. 
	This SERVICE is provided for people who use the Fire Detection and Alert System (FiDAS) at no cost.
	 This page is used to inform users regarding our policies with the collection, use, and disclosure 
	 of Personal information if anyone decides to use our service. If you choose to use our service,
	  then you agree to the collection and use of information in relation to this policy. The personal
    informnation that we collect is used for providing and improving the service.
    We will not use or share your information with anyone except as described
	 in the Privacy Policy.</Text>
    </View>
	</ScrollView>
	</View>
				
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#9e9e9e',
		
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',

	},
	text1: {
		fontSize: 20,
		fontStyle:'italic',
		fontWeight: 'bold',
		color: '#000',
		

	},
	navBar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FF6300',
		height: 30,
		marginBottom:20,
	  },
	  body: {
		flex: 3,
		display: 'flex',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#9e9e9e',
	  },
	 
	
});

export default TermsPage;


