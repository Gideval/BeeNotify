import React,  { useState } from "react";
import { View, Image, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../components/index';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inter_900Black, Inter_800ExtraBold} from '@expo-google-fonts/inter'
import { useNavigation } from "@react-navigation/native";
import firebaseDB from "../backend/firebaseDB";

function LoginPage () {
    const navigation = useNavigation();
    const db = firebaseDB();

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

    /*const emailData = {
        useremail: email,
    }*/

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleButtonPress = () => {
        navigation.navigate("RegistrationPage");
      };

    const passwordRecovery = () => {
        navigation.navigate("PasswordRecovery");
    };
    
    const login = async () => {
        const resultLogin = await db.loginApp(email, password);
        console.log(resultLogin)

        if (resultLogin) {
            //navigation.navigate('MainScreen', {userEmail : email});
        
            navigation.navigate('AlarmScreen');
        }
        else {
            alert('Falha no login');
        }
    }
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
                    <View style={styles.content}> 
                        <Text>Email:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />

                        <Text>Senha:</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="black"
                            />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={handleButtonPress} style={styles.buttom}>
                            <View style={styles.botao}>
                                <Text style={styles.textoBotao}>Clique em mim!</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={login} style={styles.buttom}>
                            <View style={styles.botao}>
                                <Text style={styles.textoBotao}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={passwordRecovery} style={styles.buttom}>
                            <View style={styles.botao}> 
                                <Text style={styles.textoBotao}>Recuperar senha</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            
        </View>
    );
}

export default LoginPage;
