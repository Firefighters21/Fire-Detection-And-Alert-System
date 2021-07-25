import React,{Component, useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { View , ImageBackground, StyleSheet,Text} from 'react-native';
import fire  from  '../../assets/fire.png';
import { StatusBar } from 'expo-status-bar';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { Button } from 'react-native-paper';



const LoggedPage = () => { 
	const navigation = useNavigation();
  
  state = {
    Location,
    errorMessage : ''
  };
 

  _getlocation = async() => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);

    if(status !== 'granted'){
      console.log('PERMISSION NOT GRANTED !');

      this.setState({
        errorMessage:'PERMISSION NOT GRANTED '
      })
    };
    
    const location =await location.getCurrentPositionAsync();

    this.setState({
      location,
    });
  }
 
  

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
      width: 415,
      alignContent:'center',
      alignItems:'center',
      position: 'relative',
    },
  
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }
    
  });


export default LoggedPage;
