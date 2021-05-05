import React, { useState } from 'react';
import NavLink from '../components/NavLink';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';

const AuthForm = ({ navigationText, errorMessage, onSubmit, submitButtonText, route, createAccount }) => {
  
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [animated, setAnimated] = useState(false);

  const verificationPass = () => {
    if (password === confirmPassword || createAccount === false) {
      setAnimated(true);
      onSubmit({ email, password, firstName, lastName, address, phoneNumber })
    }
    else {
      console.log('Nu merge')//To be replaced in one brigh day...
    }
  }

  return (
    <View style={styles.container}>
      {animated && errorMessage === '' ? (<ActivityIndicator size="large" color="#fb5b5a" />) :

      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <Text style={styles.logo}>Medical Manager</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          placeholder="Email"
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {
        createAccount ?
          (
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="#003f5c"
                secureTextEntry
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            
          ) : null
      }

      { 
        createAccount ?
          (
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="#003f5c"
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            
          ) : null
      }

      { 
        createAccount ?
          (
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="#003f5c"
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            
          ) : null
      }

      { 
        createAccount ?
          (
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="#003f5c"
                placeholder="Adress"
                value={address}
                keyboardType='email-address'
                onChangeText={setAddress}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            
          ) : null
      }

      { 
        createAccount ?
          (
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor="#003f5c"
                placeholder="Phone Number"
                value={phoneNumber}
                keyboardType='numeric'
                onChangeText={setPhoneNumber}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            
          ) : null
      }

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => verificationPass()}
      >
        <Text style={styles.loginText}>{submitButtonText}</Text>
      </TouchableOpacity>

      <NavLink
        text={navigationText}
        routeName={route}
      />

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      </View>
    </ScrollView>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  },

  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },

  inputText: {
    height: 50,
    color: "white"
  },

  forgot: {
    color: "white",
    fontSize: 15
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },

  loginText: {
    fontSize: 16,
    color: "white",
  },

  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  }, 
});

export default AuthForm;
