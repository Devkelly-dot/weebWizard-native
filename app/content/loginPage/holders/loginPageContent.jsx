import { View, Image, StyleSheet } from "react-native";
import LoginForm from "../components/loginForm/loginForm";

export default function LoginPageContent() {
    return (
        <View>
            <Image
                source={require('@/assets/images/crystal-ball.png')}
                style={styles.reactLogo}
            />
            <LoginForm/>
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
  