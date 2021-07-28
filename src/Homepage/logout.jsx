import React from 'react';
import { View, StyleSheet,Text} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {Button} from 'react-native-paper';


function logout() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>CLICK THE BUTTON BELOW IF YOU WANT TO LOGOUT</Text>
            <Button 
		 onPress={() => navigation.navigate('login')}
		 uppercase={false}
		 mode="contained"
		 >
			Log Out
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

  export default logout;