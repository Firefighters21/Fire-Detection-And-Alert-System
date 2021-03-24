import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screens/Home';

const AuthenticatedLayout = () => {
	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator>
			<Drawer.Screen name="home" component={HomePage} />
		</Drawer.Navigator>
	);
};

export default AuthenticatedLayout;
