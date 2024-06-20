import { View, Image, StyleSheet } from "react-native";
import RegisterForm from "../components/registerForm/registerForm";

export default function RegisterPageContent() {
    return (
        <View>
            <Image
                source={require('@/assets/images/crystal-ball.png')}
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
  