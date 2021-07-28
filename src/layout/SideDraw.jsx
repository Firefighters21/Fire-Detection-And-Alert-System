import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView,StyleSheet,Button ,TouchableOpacity, Text} from 'react-native';
import LoggedPage from '../screens/logged';
import About from '../Homepage/About';
import TipsPage from '../Homepage/PrivacyAndPolicy';
import TermsPage from '../Homepage/TermsAndConditions';
import WebPage from '../Homepage/fireServiceWebsite';
import Feedback from '../Homepage/Feedback';
import PrivacyAndPolicy from '../Homepage/PrivacyAndPolicy';
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logout from '../Homepage/logout';

const SideDraw = () => {
	const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  

	return (
		<SafeAreaView style={{ flex: 1 }}>


		 <Drawer.Navigator >
        <Drawer.Screen name="logged"   component={LoggedPage} />
        <Drawer.Screen name="Tips and Tricks"  component={TipsPage} />
        <Drawer.Screen name="Fire Service Website"   component={WebPage} />
        <Drawer.Screen name="Terms and Conditions"   component={TermsPage} />
        <Drawer.Screen name="Privacy and Policy"   component={PrivacyAndPolicy} />
        <Drawer.Screen name="About"   component={About} />
        <Drawer.Screen name="Feedback"  component={Feedback} />
        <Drawer.Screen name="Log out"   component={logout} />
        
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
