import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View , ImageBackground,StyleSheet} from 'react-native';
import fire  from  '../../assets/fire.png';
import { StatusBar } from 'expo-status-bar';





const LoggedPage = () => {
	const navigation = useNavigation();

     

	return (
        <View style={styles.container} >
        

            <ImageBackground source={fire} style={styles.image} >
      </ImageBackground>
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



export default LoggedPage;
