import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View , ImageBackground, StyleSheet, Platform}  from 'react-native';
import fire  from  '../../assets/fire.png';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { Button } from 'react-native-paper';
import firebase from "firebase";


const LoggedPage = () => { 
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);


 const handleBuzzerPress = () => {
   const data = {
     userName:userAuth.displayName,
     userContact:userAuth.phoneNumber,
     dateSent:new Date().toLocaleDateString(),
     timeSent: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }),
     location:""
   }
 }
	return (
        <View style={styles.container} >
      
            <ImageBackground source={fire} style={styles.image} >
           
              <Button
		     	mode="contained"
			    color ="white" 
		    	uppercase ={false}
	    		style={styles.button}
		  	 onPress={() =>handleBuzzerPress()} 
        
			>
			 BUZZER	
			</Button>
          </ImageBackground> 
            <StatusBar style="fade" />
           
        </View>
		
		
	);

  }

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
      width:'40%',  
      borderRadius:20,
     alignContent:'center',
      alignItems:'center',
      position: 'relative',
      marginLeft:130
  
      
    },
  
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }
    
  });


 export default LoggedPage;
