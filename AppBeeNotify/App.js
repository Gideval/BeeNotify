import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { CustomButton } from './src/components/index';

export default function App() {

  const handleButtonPress = () => {
    alert('Botão Pressionado', 'Ação executada ao pressionar o botão');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/favo.png')} style={styles.imageBackground}>
        <View style={styles.viewCustom}>
          <CustomButton  w='150' h='50' onPress={handleButtonPress}>
            <CustomText>clique aqui </CustomText>
          </CustomButton>
        </View>
        </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  viewCustom: {
    flex: 0.55, // Define a altura da metade da tela
    backgroundColor: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5))`, 
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});