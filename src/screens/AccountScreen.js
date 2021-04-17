import React, { useContext } from 'react';
import Spacer from '../components/Spacer';
import { Button } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView, NavigationEvents } from 'react-navigation';

const AccountScreen = () => {

  const { signout, fetchUser, state } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>

      <NavigationEvents
        onWillFocus={fetchUser}
      />

      <Text style={{ fontSize: 35, alignSelf: 'center' }}>Bine ai revenit {state.firstName}</Text>

      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
      
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    tabBarIcon : <FontAwesome name = "gear" size = {27} />
  }
}

const styles = StyleSheet.create({});

export default AccountScreen;
