import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function StyledButton({text, onPress, disabled, sx}) {
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.button, ...sx, opacity: disabled?0.5:1}} disabled={disabled}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      width: '100%',
      backgroundColor: '#3498db',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      opacity: 0.5
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
})