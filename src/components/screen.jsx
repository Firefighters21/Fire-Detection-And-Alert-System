import React from 'react';
import { SafeAreaView , StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';

function Screen({children}) {
    return (
       <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor:'gray',
    }
})

export default Screen;