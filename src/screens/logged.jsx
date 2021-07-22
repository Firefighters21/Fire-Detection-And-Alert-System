import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View , Platform, ImageBackground, StyleSheet,Text} from 'react-native';
import fire  from  '../../assets/fire.png';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';


const LoggedPage = () => { 
	const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (
      async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) 
      {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  

	return (
        <View style={styles.container} >
           <Text style={styles.paragraph}>{text}</Text>
        
         
            <ImageBackground source={fire} style={styles.image} >
            <Text style={styles.paragraph}>{text}</Text>
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
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }
    
  });


export default LoggedPage;
