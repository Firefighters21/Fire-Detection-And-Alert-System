import React from 'react';
import { 
    Image,
     View ,
     StyleSheet,
     TouchableHighlight
     } from 'react-native';

     import AppText from '../components/AppText';
  

function ListItem({
    username,
    userContact,
    userLocation,
    date,
    time,
    onPress
}) {
    return (
    
       <View style={styles.container}>
           
           <AppText style={styles.username}>{username}</AppText>
           <AppText style={styles.userContact}>{userContact}</AppText>
           <AppText style={styles.userLocation}>{userLocation}</AppText>
           <AppText style={styles.date}>{date}</AppText>
           <AppText style={styles.time}>{time}</AppText>
          
       </View>
      
    );
}
const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        marginTop:20,
        marginLeft:20,
        marginRight: 20, 
    },

    username:{
        color:'#6e6969',
        fontSize:24
    },
    userContact:{
        fontWeight:'500',
    }
})

export default ListItem;