import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import ListItem  from '../components/ListItemDetails';



function ListingsDetailsScreen(props) {
    const navigation = useNavigation();
    return (
        <ScrollView>
       <View style= {styles.container}>
          <ListItem
          username="Mr. Akoto Mensah"
          userContact="0543074139"
          userLocation="latitude 0.764 longitude 0.646"
          time="18:01 GMT"/>
       </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        flex :1,
    },
   
})

export default ListingsDetailsScreen;