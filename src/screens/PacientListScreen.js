import React, { useContext } from 'react';
import { ListItem } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext'
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const TrackListScreen = ({ navigation }) => {

  const { state, fetchTracks } = useContext(TrackContext)

  return (
    <>
      <NavigationEvents
        onWillFocus={fetchTracks}
      />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id : item._id })}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    title : 'Pacienti',
    headerRight: () => (
      <TouchableOpacity style={{ marginHorizontal: 10 }}>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default TrackListScreen;
