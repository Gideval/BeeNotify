import React, { useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts, Inter_900Black, Inter_800ExtraBold} from "@expo-google-fonts/inter"
import { useNavigation} from "@react-navigation/native"
import { styles } from "../components/index";
import firebaseDB from "../backend/firebaseDB";

function RegistrationPage () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [messagePassword, setMessagePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();
    const db = firebaseDB();

    let [fontsLoaded, fontError] = useFonts ({
        Inter_900Black,
        Inter_800ExtraBold,
    });

    if (!fontsLoaded && fontError) {
        return null;
    }

    function getCurrentDate () {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        
        return `${day}-${month}-${year}`;
    }

    const comparePasswor = ( ) => {
        if ( password === repeatPassword) {
            setMessagePassword('')
        }
        else if (password !== '' && repeatPassword !== '' && password.length < 6 || repeatPassword.length < 6) {
                setMessagePassword('A senha deve conter 6 caracteres ou mais');
        }
        else if (password !== '' && repeatPassword !== '' && password !== repeatPassword) {
            setMessagePassword('A senhas são diferentes')
        }
        else {
            setMessagePassword('');
        }
    }

    const submitRegistration = async () => {
        if (messagePassword === '') {
            const date = getCurrentDate();

            const message = await db.signupApp(name, date, email, password)
            navigation.goBack();
        }
        else {
            alert(messagePassword);
        }
    }

    return  (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/abelha.png')} style={styles.responsiveImage}/>
                    <Text style={[styles.brandText, {fontFamily: 'Inter_800ExtraBold'}]}>BeeNotify</Text>
                </View>
            </View>
            <View style={styles.middleView}>
                <ImageBackground source={require('../../assets/Union.png')} style={styles.imageBackgroundLogin}>
                    <View style={styles.contentLogin}>
                        <Text style={[styles.registerText, {fontFamily: 'Inter_900Black'}]}>Nome Completo</Text>
                        <TextInput 
                            style={styles.textInputEmail}
                            placeholder="DIGITE SEU NOME COMPLETO" 
                            placeholderTextColor= '#acabab'
                            value={name}
                            onChangeText={(textName) => setName(textName)} />
                        <Text style={[styles.registerText, {fontFamily: 'Inter_900Black'}]}>E-mail</Text>
                        <TextInput 
                            style={styles.textInputEmail}
                            placeholder="DIGITE SEU ENDEREÇO DE E-MAIL" 
                            placeholderTextColor= '#acabab'
                            value={email}
                            onChangeText={(textEmail) => setEmail(textEmail)}/>
                        <Text style={[styles.registerText, {fontFamily: 'Inter_900Black'}]}>Defina uma senha</Text>
                        <TextInput
                            style={styles.textInputPassword}
                            placeholder="DIGITE SUA SENHA"
                            placeholderTextColor= '#acabab'
                            secureTextEntry={!showPassword}
                            onChangeText={(textPassword) => {
                                setPassword(textPassword)
                                comparePasswor()}}
                            value={password} 
                        />
                        <Text style={[styles.registerText, {fontFamily: 'Inter_900Black'}]}>Repita a senha</Text>
                        <TextInput 
                            style={styles.textInputPassword}
                            placeholder="DIGITE SUA SENHA NOVAMENTE"
                            placeholderTextColor= '#acabab'
                            secureTextEntry={!showPassword}
                            onChangeText={(textPassword) =>  {
                                setRepeatPassword(textPassword)
                                comparePasswor()}}
                            value={repeatPassword}
                            onEndEditing={comparePasswor}
                         />
                         <TouchableOpacity style={styles.styleButtomLogin} onPress={submitRegistration}>
                            <View style={styles.connectivityStatus}>
                                <Text style={[styles.textButtom, {fontFamily: 'Inter_800ExtraBold'}]}>Concluir</Text>
                            </View>
                        </TouchableOpacity>
                         
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default RegistrationPage