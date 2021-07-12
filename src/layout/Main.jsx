import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';
import LoginPage from '../screens/Login';
import SignUpPage from '../screens/SignUp';
import SignInPage from '../screens/SignIn';
import ForgetpwdPage from '../screens/forgetPassword';
import SideDraw from './SideDraw';




const Stack = createStackNavigator();

const MainLayout = () => {
	return (
		<NavigationContainer>
			
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="splash"
			>
				
				<Stack.Screen name="login" component={LoginPage} />
				<Stack.Screen name="logged" component={SideDraw}/>
				<Stack.Screen name="SignUp" component={SignUpPage} />
				<Stack.Screen name="SignIn" component={SignInPage} />
				<Stack.Screen name="forgot-password" component={ForgetpwdPage} />
		
			</Stack.Navigator>


		</NavigationContainer>
	);
};

export default MainLayout;
