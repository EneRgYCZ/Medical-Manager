import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import  MapView, { Polyline }  from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {

  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(t => t._id === _id);
  const initalCoords = track.locations[0].coords;

  return <>
    <Text style={{ fontSize: 48, alignSelf : 'center' }}>{track.name}</Text>
    <MapView
      initialRegion = {{
        longitudeDelta : 0.01,
        latitudeDelta : 0.01,
        ...initalCoords
      }}
      style = {styles.map}
    >
      <Polyline
        coordinates = {track.locations.map(loc => loc.coords)}
      />
    </MapView>
  </>
};

const styles = StyleSheet.create({
  map: {
    height : 300
  }
});

export default TrackDetailScreen;
