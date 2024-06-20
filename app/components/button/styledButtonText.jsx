import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function StyledButtonText({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      color: '#3498db',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
})