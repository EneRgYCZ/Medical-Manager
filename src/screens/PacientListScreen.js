import { LogBox } from 'react-native';
import { SearchBar } from "react-native-elements";
import PacientList from '../components/PacientList';
import React, { useContext, useState, useCallback } from "react";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import { Context as PacientContext } from "../context/PacientContext";
import { StyleSheet, RefreshControl, ScrollView } from "react-native";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const PacientListScreen = ({ navigation }) => {

  LogBox.ignoreAllLogs();

  const { state, fetchPacients } = useContext(PacientContext);

  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState('')

  const filterSearch = (text) => {
    return state.filter ( state => {
      if (text === ''){
        return state
      }
      return state.fullName.toLowerCase() === text.toLowerCase();
    })
  }

  const onRefresh = useCallback(() => {
    fetchPacients()
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView 
      forceInset={{ top: 'always' }} 
      style = {styles.container} 
    > 

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >

        <NavigationEvents 
          onDidFocus={fetchPacients} 
        />

        <SearchBar        
          round    
          darkTheme
          value = {search}
          autoCorrect={false}   
          onChangeText={setSearch}
          placeholder="Cauta Pacienti..."
          containerStyle = {styles.container}                     
        />  

        <PacientList
          results = {filterSearch(search)}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

PacientListScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#003f5c'
  },

  search : {
    fontSize: 19,
    paddingTop : 14,
    paddingRight : 140,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: '#003f5c',
  },
});

export default PacientListScreen;
