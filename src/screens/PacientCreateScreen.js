import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PacientForm from '../components/PacientForm';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

const TrackCreateScreen = ({ isFocused, navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }} style = {styles.container}>
      <PacientForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = () => {
  return {
    title : 'Adauga Pacienti',
    tabBarIcon : <FontAwesome name = "plus" size = {27} color = '#fb5b5a' />
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#003f5c'
  }
});

export default withNavigationFocus(TrackCreateScreen);
