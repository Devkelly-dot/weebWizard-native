import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PlanFeature({ feature }) {
    return (
        <View style={styles.featureContainer}>
            {feature.render ? feature.render() : <Text style={styles.featureText}>{feature.name}</Text>}
            <Icon
                name={"check"}
                size={20}
                color={"green"}
                style={styles.icon}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    featureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    featureText: {
        flex: 1, // take up the available space
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    },
});