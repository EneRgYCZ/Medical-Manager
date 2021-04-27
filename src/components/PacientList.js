import React from "react";
import { LogBox } from 'react-native';
import { navigate } from '../navigationRef';
import { ListItem, Avatar } from "react-native-elements";
import { FlatList, TouchableOpacity, StyleSheet, View } from "react-native";

const PacientList = ({ results }) => {

    LogBox.ignoreAllLogs();

    return (
        <View style = {styles.container}>
        <FlatList
            data={results}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigate('TrackDetail', { _id : item._id })}>
                        <ListItem containerStyle = {styles.container}>
                            <Avatar rounded source={{uri: item.avatarPhoto}} />
                            <ListItem.Content>
                                <ListItem.Title style = {styles.text}>{item.fullName}</ListItem.Title>
                                <ListItem.Subtitle style = {styles.subTitle}>Data raportarii: {item.dateOfReport}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                );
            }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#003f5c',
    },
    text: {
        color : '#fb5b5a'
    },
    subTitle : {
        color : '#ffffff'
    }
});

export default PacientList;
