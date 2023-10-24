import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton, CustomText } from './src/components/index';

export default function App() {

  const handleButtonPress = () => {
    alert('Botão Pressionado', 'Ação executada ao pressionar o botão');
  };

  return (
    <View style={styles.container}>
      <CustomButton  w='150' h='50' onPress={handleButtonPress}>
        <CustomText>clique aqui </CustomText>
      </CustomButton>
      <Text>Open up App.js </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});