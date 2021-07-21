import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const PrivacyAndPolicy = () => {
	const navigation = useNavigation();
	
	return (
		<View style={styles.mainContainer}>
			 <View style={styles.navBar}>
				 <Text style ={styles.text}>PRIVACY AND POLICY</Text>
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

			 <View style={styles.navBar}>
				 <Text style ={styles.text}>INFRORMATION COLLECTION AND USE</Text>
    </View>
	<View style={styles.body1}>
		<Text style={styles.text1}>
	For as better experience, while using our service, we may require you to provide us with 
	certain personal information. The information that we request will be retained by us and 
	used as described in this privacy policy.
    The app does use a third-party services that may collect information used to identify you.

   Link to privacy policy of third party services providers used by the app:

   1. Google Play Service
   2. Firebase

</Text>

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
		backgroundColor: 'white',
		
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
	  },
	  body: {
		flex: 3,
		display: 'flex',
		height: '50%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#9e9e9e',
	  },
	  body1: {
		flex: 3,
		display: 'flex',
		height: '50%',
		backgroundColor: '#9e9e9e',
	},
});

export default PrivacyAndPolicy;
