import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View , Image} from 'react-native';
import fire  from  '../../assets/fire.png';
import { StatusBar } from 'expo-status-bar';




const LoggedPage = () => {
	const navigation = useNavigation();

	return (
        <View>
            <Image source={fire} />
            <StatusBar style="fade" />
            
        </View>
		
		
	);
};



export default LoggedPage;
