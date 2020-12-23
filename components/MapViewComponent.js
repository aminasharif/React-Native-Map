import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions} from 'react-native'
import MapView from "react-native-maps"
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import {CurrentLocationButton} from './mapComponents/CurrentLocationButton'


export default class MapViewComponent extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            region : null,
        }
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
             if (status !== 'granted') {
                 console.log('Permission to access Location was denied');
             }

        let location = await Location.getCurrentPositionAsync({enabledHighAccuracy : true});
        let region = {
            latitude : location.coords.latitude,
            longitude : location.coords.longitude,
            latitudeDelta : 0.045,
            longitudeDelta : 0.045
        }
        this.setState({region : region})
    }

    render() {
        // let {longitude, latitude} = this.state.coordinate
        console.log(this.state.region, "mapcoord")
        return (
            <View style = {styles.map}>
                <CurrentLocationButton />
                <MapView
                    style = {{flex : 1}}
                    initialRegion={this.state.region}
                    showsUserLocation = {true}
                    showsCompass = {true}
                 
                >
                </MapView>
            </View>
                
        )
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
    
})