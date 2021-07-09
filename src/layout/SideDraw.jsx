import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoggedPage from '../screens/logged';
import About from '../Homepage/About';
import TipsPage from '../Homepage/Tips';
import TermsPage from '../Homepage/TermsAndConditions';
import Logout from '../Homepage/logout';
import WebPage from '../Homepage/fireServiceWebsite';
import Feedback from '../Homepage/Feedback';
import PrivacyAndPolicy from '../Homepage/PrivacyAndPolicy';


const SideDraw = () => {
	const Drawer = createDrawerNavigator();

	return (
		
		 <Drawer.Navigator >
       <Drawer.Screen name="logged" component={LoggedPage} />
        <Drawer.Screen name="Tips and Tricks" component={TipsPage} />
        <Drawer.Screen name="Fire Service Website" component={WebPage} />
        <Drawer.Screen name="Terms and Conditions" component={TermsPage} />
        <Drawer.Screen name="Privacy and Policy" component={PrivacyAndPolicy} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="logout" component={Logout} />
      </Drawer.Navigator>
		
	);
};

export default SideDraw;
