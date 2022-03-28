import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity>
                    <View style={styles.square}></View>
                </TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 16,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        marginRight: 16
    },
    itemText: {
        maxWidth: "80%"
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;