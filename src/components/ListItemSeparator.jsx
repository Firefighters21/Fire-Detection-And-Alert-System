import React from 'react';
import { View, StyleSheet} from 'react-native'


function ListItemSeparator() {
    return (
        <View style={styles.separator}/>
    );
}
const styles = StyleSheet.create({
   separator:{
       backgroundColor:'#f8f4f4' ,
       height: 1,
        width: "100%"
   }
    
})

export default ListItemSeparator;