import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const FriendAgeScreen = () => {
    const friends = [
        {
            name: "Friend 1",
            age: "Age 20"
        },
        {
            name: "Friend 2",
            age: "Age 45"
        },
        {
            name: "Friend 3",
            age: "Age 32"
        },
        {
            name: "Friend 4",
            age: "Age 27"
        },
        {
            name: "Friend 5",
            age: "Age 53"
        },
        {
            name: "Friend 7",
            age: "Age 30"
        }
    ]

    return (
        <FlatList
            keyExtractor={(friend)=> friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.friendStyle}> {item.name} - {item.age}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    friendStyle: {
        paddingVertical: 0
    }

});

export default FriendAgeScreen;