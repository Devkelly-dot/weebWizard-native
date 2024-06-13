import { Image, StyleSheet, View} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import HomeScreen from '../screens/home/homeScreen';

export default function HomeTab() {
  return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#e5e4ff', dark: '#e5e4ff' }}
        headerImage={
          <Image
            source={require('@/assets/images/hero.png')}
            style={styles.reactLogo}
          />
        }>
          <HomeScreen/>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContainer: {
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
