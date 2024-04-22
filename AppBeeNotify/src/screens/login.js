import React,  { useState } from "react";
import { View, Image, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../components/index';
import { useFonts, Inter_400Regular, Inter_900Black, Inter_800ExtraBold} from '@expo-google-fonts/inter'
import { useNavigation } from "@react-navigation/native";
import firebaseDB from "../backend/firebaseDB";

function LoginPage () {
    const navigation = useNavigation();
    const db = firebaseDB();

    let [fontsLoaded, fontError] = useFonts({
        Inter_400Regular,
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
            navigation.navigate('MainScreen', {userEmail : email});
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
            <View style={styles.middleViewLogin}>
                <ImageBackground source={require('../../assets/Union.png')} style={styles.imageBackgroundLogin}>
                    <View style={styles.contentLogin}>
                        <Text style={[styles.loginText, {fontFamily: 'Inter_400Regular'}]}>LOGIN</Text>
                        <Text style={[styles.emailPasswordText, {fontFamily: 'Inter_900Black'}]}>E-mail</Text>
                        <TextInput
                            style={styles.textInputEmail}
                            placeholder="DIGITE SEU E-MAIL"
                            placeholderTextColor= '#acabab'
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        
                        <Text style={[styles.emailPasswordText, {fontFamily: 'Inter_900Black'}]}>Senha</Text>
                        <TextInput
                            style = {styles.textInputPassword}
                            placeholder="DIGITE SUA SENHA"
                            placeholderTextColor= '#acabab'
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
        
                        <TouchableOpacity style={styles.styleButtomLogin} onPress={login}>
                            <View style={styles.connectivityStatus}>
                                <Text style={[styles.textButtom, {fontFamily: 'Inter_800ExtraBold'}]}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.loginScpace}></View>
                        <TouchableOpacity style={styles.styleButtomLogin} onPress={handleButtonPress}>
                            <View style={styles.connectivityStatus}>
                                <Text style={[styles.textButtom, {fontFamily: 'Inter_800ExtraBold'}]}>Registre-se agora!</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.passwordButtom} onPress={passwordRecovery}>
                            <View style={styles.connectivityStatus}>
                                <Text style={[styles.textButtomLogin, {fontFamily: 'Inter_800ExtraBold'}]}>Esqueceu a senha?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
            
        </View>
    );
}

export default LoginPage;
