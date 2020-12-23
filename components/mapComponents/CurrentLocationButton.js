import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const WIDTH = Dimensions.get('window').width;
const HEIGHT =Dimensions.get('window').height;

export const CurrentLocationButton = function(props){
    return(
        <View style = {styles.container} >
            <MaterialIcons 
                name = "my-location" 
                color = "#000000" 
                size={25}
                onPress = {() => {}} /> 
        </View>
    )
        
    
}

const styles = StyleSheet.create({
    container: {
      top : HEIGHT.bottom,
      zIndex : 9,
      position: 'absolute',
      width : 45,
      height : 45,
      backgroundColor: '#fff',
      left: WIDTH-70,
      borderRadius : 50,
      shadowColor: '#000000',
      elevation: 7,
      shadowRadius: 5,
      shadowOpacity: 1.0,
      justifyContent: 'space-around',
      alignItems: 'center',
      
      
    },
});
    