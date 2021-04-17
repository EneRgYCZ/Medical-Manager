import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PacientForm from '../components/PacientForm';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

const TrackCreateScreen = ({ isFocused, navigation }) => {

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <PacientForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = () => {
  return {
    title : 'Adauga Pacienti',
    tabBarIcon : <FontAwesome name = "plus" size = {27} />
  }
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
