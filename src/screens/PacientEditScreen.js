import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import PacientEditForm from '../components/PacientEditForm';
import { Context as PacientContext } from '../context/PacientContext';

const PacientEditScreen = ({ navigation }) => {

     const _id = navigation.getParam('_id');

     const { deletePacient } = useContext(PacientContext);

     return (
          <SafeAreaView forceInset={{ top: 'always' }} style = {styles.container}>
               <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('TrackDetail')}>
                         <FontAwesome name="arrow-left" size={27} color="white" style={{ padding: 13 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PacientList')}>
                         <FontAwesome name="trash" size={27} color="white" style={{ padding: 13 }} />
                    </TouchableOpacity>
               </View>
               <PacientEditForm
                    _id={_id}
               />
          </SafeAreaView>
     )
};

PacientEditScreen.navigationOptions = () => {
     return {
          headerShown: false,
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#003f5c',
     },

     header: {
          flexDirection: 'row',
          justifyContent: 'space-between' 
     },

     Body: {
          flex: 15,
          flexDirection: 'column'
     },
});

export default PacientEditScreen;