import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as PacientContext } from "../context/PacientContext";
import { FontAwesome } from '@expo/vector-icons'; 

const PacientListScreen = ({ navigation }) => {

  const { state, fetchPacients } = useContext(PacientContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchPacients} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
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
      <TouchableOpacity style={{ marginHorizontal: 10 }}>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default PacientListScreen;
