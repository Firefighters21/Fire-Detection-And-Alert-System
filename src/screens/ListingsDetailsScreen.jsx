import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import ListItem  from '../components/ListItemDetails';
import ListItemSeparator from '../components/ListItemSeparator';
import { FlatList } from 'react-native-gesture-handler';
import Screen from '../components/screen';



function ListingsDetailsScreen(props) {
    const navigation = useNavigation();
     
    const messages =[{
        username:"Mr. Akoto Mensah",
        userContact:"0543074139",
        userLocation:"latitude 0.764 longitude 0.646",
        date:"15/06/21",
        time:"18:01 GMT",
    },
    {
    username:"Mr.Rock",
    userContact:"0501654455",
    userLocation:"latitude 0.564 longitude 0.645",
    date:"15/07/21",
    time:"18:02 GMT",
}]
    return (
        <Screen style= {styles.container}>
       <FlatList
           data={messages}
           keyExtractor= {messages => {messages.userContact.toString()}}
           renderItem = {({item}) => <ListItem
            username={item.username}
            userContact={item.userContact}
            userLocation={item.userLocation}
            date={item.date}
            time={item.time}
            onPress={() => console.log("message selected",item)}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => console.log(item)} />
              )}/>}
            ItemSeparatorComponent={ListItemSeparator}
            />
    
     
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
       
       
    },
   
})

export default ListingsDetailsScreen;