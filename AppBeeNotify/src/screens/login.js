import React,  { useState } from "react";
import { View, Image, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../components/index';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inter_900Black, Inter_800ExtraBold} from '@expo-google-fonts/inter'

function LoginPage () {
    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_800ExtraBold,
    });

    if (!fontsLoaded && fontError) {
        return null;
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const handleButtonPress = () => {
        alert('Botão Pressionado', 'Ação executada ao pressionar o botão');
      };

    return(
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.imageContainer}>
                <Image source={require('../../assets/abelha.png')} style={styles.responsiveImage}/>
                <Text style={[styles.brandText, {fontFamily: 'Inter_800ExtraBold'}]}>BeeNotify</Text>
                </View> 
            </View>
            <View style={styles.middleView}>
                <ImageBackground source={require('../../assets/Union.png')} style={styles.imageBackground}>
                    <Text>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <Text>Senha:</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color="black"
                        />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            
        </View>
    );
}

export default LoginPage;