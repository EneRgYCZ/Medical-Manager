import React from 'react';
import { withNavigation } from 'react-navigation';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'white',
    alignSelf : 'center',
    fontSize: 15,
  }
});

export default withNavigation(NavLink);
