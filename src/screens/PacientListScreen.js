import React, { useContext } from "react";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as PacientContext } from "../context/PacientContext";
import { StyleSheet, FlatList, TouchableOpacity, TextInput, View } from "react-native";

const PacientListScreen = ({ navigation }) => {

  const { state, fetchPacients } = useContext(PacientContext);

  return (
    <>
      <NavigationEvents 
        onWillFocus={fetchPacients} 
      />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id : item._id })}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.fullName}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

PacientListScreen.navigationOptions = () => {
  return {
    title : 'Pacienti',
    headerRight: () => (
      <View style = {styles.header}>
        <TextInput
          style={styles.search}
          placeholder = 'Cauta pacient...'
          underlineColorAndroid="transparent"
        />
      </View>
    )
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
