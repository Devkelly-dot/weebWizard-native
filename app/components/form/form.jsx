import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';

export default function Form({ fields }) {
    return (
        <View contentContainerStyle={styles.container}>
            {fields?.map((f) => {
                return (
                <View key={f.field} style={styles.fieldContainer}>
                    {f.render ? (
                    f.render()
                    ) : (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>{f.label}</Text>
                        <TextInput
                            value={f.value}
                            onChangeText={f.onChange}
                            style={{...styles.input, ...f.sx}}
                            placeholder={f.placeholder || ''}
                            secureTextEntry={f.secureTextEntry}
                            multiline={f.multiline}
                        />
                    </View>
                    )}
                </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    fieldContainer: {
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});