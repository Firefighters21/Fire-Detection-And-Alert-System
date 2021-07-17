import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View , ImageBackground,StyleSheet,Text} from 'react-native';
import fire  from  '../../assets/fire.png';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import alarm from '../../assets/alarm.png';
import { Button } from 'react-native-paper';





const LoggedPage = () => {
	const navigation = useNavigation();
 
     

	return (
        <View style={styles.container} >
        
         
            <ImageBackground source={fire} style={styles.image} >
              <Button
		     	mode="contained"
			    color ="white" 
		    	uppercase ={false}
	    		style={styles.button}
		  	 onPress={() => navigation.navigate('')} 
			>
			 MANUAL BUZZER	
			</Button>
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
    logo :{
      marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: '#ED2525',
    borderRadius: 50,
    transform: [{ scaleX: 2 }],
    },
    button: {
      marginTop: 60,
      padding: 5,
      width: 350,
      position: 'absolute',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }
    
  });



export default LoggedPage;
