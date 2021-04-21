import React from "react";
import { navigate } from '../navigationRef';
import { ListItem } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native";

const PacientList = ({ results }) => {

  return (
    <FlatList
        data={results}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={() => navigate('TrackDetail', { _id : item._id })}>
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>{item.fullName}</ListItem.Title>
                            <ListItem.Subtitle>Data raportarii: {item.dateOfReport}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </TouchableOpacity>
            );
        }}
    />
  );
};

export default PacientList;
