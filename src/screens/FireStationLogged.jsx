import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View , StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';





const FireStationLogged = () => {
	const navigation = useNavigation();

     

	return (
        <View style={styles.container} >
        

            <StatusBar style="fade" />
            
        </View>
		
		
	);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }
    
  });



export default FireStationLogged;
