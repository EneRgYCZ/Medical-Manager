import React, { useContext, useState, useEffect } from "react";
import { NavigationEvents } from "react-navigation";
import PacientList from '../components/PacientList';
import { ListItem, SearchBar } from "react-native-elements";
import { Context as PacientContext } from "../context/PacientContext";
import { StyleSheet, FlatList, TouchableOpacity, TextInput, View } from "react-native";

const PacientListScreen = ({ navigation }) => {

  const { state, fetchPacients } = useContext(PacientContext);

  const [search, setSearch] = useState('')

  const filterSearch = (text) => {
    return state.filter ( state => {
      if (text === ''){
        return state
      }
      return state.fullName.toLowerCase() === text.toLowerCase();
    })
  }

  return (
    <>
      <NavigationEvents 
        onWillFocus={fetchPacients} 
      />

      <SearchBar        
        round    
        lightTheme
        value = {search}
        autoCorrect={false}   
        onChangeText={setSearch}
        placeholder="Cauta Pacienti..."                           
      />  

      <PacientList
        results = {filterSearch(search)}
      />
    </>
  );
};

PacientListScreen.navigationOptions = () => {
  return {
    title : 'Pacienti',
  }
}

const styles = StyleSheet.create({
  search : {
    fontSize: 19,
    paddingTop : 14,
    paddingRight : 140,
    fontWeight: 'bold',
  },
  header : {
    flex : 1,
    justifyContent : 'space-between'
  }
});

export default PacientListScreen;
