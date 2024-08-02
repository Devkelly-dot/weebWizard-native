import { View, Image, StyleSheet, ScrollView } from "react-native";
import RegisterForm from "../components/registerForm/registerForm";

export default function RegisterPageContent() {
    return (
        <View>
            <Image
                source={{uri: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbqyB4JUmCt7ULSeEkh0ePR5G-hs72qKX7vyg4zWJ5zY4IP-W827I12D0u5zbSpzMxYkXIoXXMLxuxA2lg9e-Sz-YeMXuFMFzU=s1600-rw-v1'}}
                style={styles.reactLogo}
            />
            <RegisterForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    reactLogo: {
      height: '50%',
      width: '50%',
      bottom: '25%',
      left: '25%',
      position: 'absolute',
      opacity: 0.05
    },
  });