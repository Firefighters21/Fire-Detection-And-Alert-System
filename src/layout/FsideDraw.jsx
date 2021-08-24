import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, SafeAreaView, StyleSheet  } from 'react-native';
import FireStationLogged from '../screens/FireStationLogged';
import Support from '../FireStationHome/Support';
import About from '../FireStationHome/About';
import { useNavigation } from '@react-navigation/core';
import logout from '../FireStationHome/logout';
import ListingsDetailsScreen from '../screens/ListingsDetailsScreen';


const FsideDraw = () => {
	const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1 }}>


		 <Drawer.Navigator  >
         <Drawer.Screen  name="Messages" component={ListingsDetailsScreen} />
         <Drawer.Screen  name="Support" component={Support} />
         <Drawer.Screen  name="About" component={About} />
         <Drawer.Screen name="log out" component={logout}/>
       
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
