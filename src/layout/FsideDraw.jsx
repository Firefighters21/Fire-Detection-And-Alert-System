import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet  } from 'react-native';
import FireStationLogged from '../screens/FireStationLogged';
import Messages from '../FireStationHome/Messages';
import Support from '../FireStationHome/Support';
import Logout from '../FireStationHome/Logout';
import About from '../FireStationHome/About';

const FsideDraw = () => {
	const Drawer = createDrawerNavigator();

	return (
		<SafeAreaView style={{ flex: 1 }}>


		 <Drawer.Navigator >
         <Drawer.Screen  name="fireStationLogged" component={FireStationLogged} />
         <Drawer.Screen  name="Messages" component={Messages} />
         <Drawer.Screen  name="Support" component={Support} />
         <Drawer.Screen  name="About" component={About} />
         <Drawer.Screen  name="Logout" component={Logout} />
       
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

export default FsideDraw;
