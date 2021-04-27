import { LogBox } from 'react-native';
import React, { useContext } from 'react';
import Spacer from '../components/Spacer';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView, NavigationEvents } from 'react-navigation';

const AccountScreen = () => {

  LogBox.ignoreAllLogs();

  const { signout, fetchUser, state } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <View style={styles.container}>

        <NavigationEvents
          onDidFocus={fetchUser}
        />

        <Text style={{ fontSize: 35, alignSelf: 'center', color: 'white' }}>Buna ziua, {state.firstName}</Text>

        <Spacer>
          <Button 
            title="SIGN OUT" 
            onPress={signout} 
            buttonStyle = {styles.button}
          />
        </Spacer>

      </View>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    tabBarIcon: <FontAwesome name="gear" size={27} color='#fb5b5a' />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#003f5c',
  },
  button: {
    backgroundColor : '#fb5b5a'
  }
});

export default AccountScreen;
