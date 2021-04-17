import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as PacientContext } from '../context/PacientContext';

const TrackDetailScreen = ({ navigation }) => {

  const { state } = useContext(PacientContext);
  const _id = navigation.getParam('_id');

  const pacient = state.find(p => p._id === _id);

  return (
  <>
    <Text style={{ fontSize: 48, alignSelf : 'center' }}>{pacient.fullName}</Text>
    <Text style={{ fontSize: 48, alignSelf: 'center' }}>{pacient.dateOfReport}</Text>
  </>
  )
};

const styles = StyleSheet.create({
  map: {
    height : 300
  }
});

export default TrackDetailScreen;
