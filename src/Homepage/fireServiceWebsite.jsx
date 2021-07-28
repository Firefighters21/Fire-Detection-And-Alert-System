import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Button } from 'react-native-paper';


const WebPage = () => {

	
	return (
        <View style={styles.container}>
        <Button 
		 onPress={ ()=>{ Linking.openURL('https://gnfs.gov.gh')}} 
		 uppercase={false}
		 mode="contained"
		 >
			 Click here to visit GNFS website
		</Button>
       </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
  });

export default WebPage;
