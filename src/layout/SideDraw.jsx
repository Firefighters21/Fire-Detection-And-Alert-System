import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, Image ,StyleSheet  } from 'react-native';
import LoggedPage from '../screens/logged';
import About from '../Homepage/About';
import TipsPage from '../Homepage/Tips';
import TermsPage from '../Homepage/TermsAndConditions';
import Logout from '../Homepage/logout';
import WebPage from '../Homepage/fireServiceWebsite';
import Feedback from '../Homepage/Feedback';
import PrivacyAndPolicy from '../Homepage/PrivacyAndPolicy';
import profile from '../../assets/profile.png';


const SideDraw = () => {
	const Drawer = createDrawerNavigator();

	return (
		<SafeAreaView style={{ flex: 1 }}>


		 <Drawer.Navigator >
        <Drawer.Screen  name="logged" component={LoggedPage} />
        <Drawer.Screen name="Tips and Tricks" component={TipsPage} />
        <Drawer.Screen name="Fire Service Website" component={WebPage} />
        <Drawer.Screen name="Terms and Conditions" component={TermsPage} />
        <Drawer.Screen name="Privacy and Policy" component={PrivacyAndPolicy} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="logout" component={Logout} />
      </Drawer.Navigator>

</SafeAreaView>
		
	);
  
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  }});

export default SideDraw;
