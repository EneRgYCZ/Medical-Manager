import { LogBox } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native'; 
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Context as PacientContext } from '../context/PacientContext';

const PacientDetailScreen = ({ navigation }) => {

  LogBox.ignoreAllLogs();

  const { state } = useContext(PacientContext);
  const _id = navigation.getParam('_id');

  const pacient = state.find(p => p._id === _id);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style = {styles.Container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.navigate('TrackList')}>
          <FontAwesome name="arrow-left" size={27} color="white" style = {{padding : 13}}/>
        </TouchableOpacity>

        <Text style = {styles.NameText}>
          {pacient.fullName}
        </Text>
        <ScrollView showsVerticalScrollIndicator = {false}>

          <Text style = {styles.DetailText}>
            Data raportarii:
          </Text>

          <Text style = {styles.ContentText}>
            {pacient.dateOfReport}
          </Text>

          <Text style = {styles.DetailText}>
            Clinica:
          </Text>

          <Text style = {styles.ContentText}>
            {pacient.clinicPetromed}
          </Text>

          <Text style = {styles.DetailText}>
            Numarul SAP:
          </Text>

          <Text style = {styles.ContentText}>
            {pacient.nrSAP}
          </Text>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
};

PacientDetailScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor : '#003f5c'
  },

  NameText: {
    fontSize: 26,
    padding : 13,
    color: '#fb5b5a',
    fontWeight : 'bold',
    alignSelf : 'center',
  },

  ContentText: {
    fontSize: 18,
    paddingLeft : 13,
    color: '#ffffff',
    fontWeight: 'bold'
  },

  DetailText: {
    fontSize: 18,
    paddingTop : 13,
    paddingLeft : 13,
    color: '#ffffff',
  },

  Header: {
    flex: 1,
    backgroundColor : '#003f5c',
    borderRadius: 15
  },

  Content: {
    flex: 2,
    backgroundColor : '#ffffff'
  },

});

export default PacientDetailScreen;
