import React, { useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts, Inter_900Black, Inter_800ExtraBold } from "@expo-google-fonts/inter"
import { useNavigation} from "@react-navigation/native"
import { styles } from "../components";
import firebaseDB from "../backend/firebaseDB";

function PasswordRecovery () {
    const navigation = useNavigation();
    const db = firebaseDB();

    const [ email, setEmail] = useState('');

    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_800ExtraBold
    });

    if (!fontsLoaded && fontError) {
        return null;
    }

    const recovery = async () => {
        await db.passwordRecovery(email);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/abelha.png')} style={styles.responsiveImage}/>
                    <Text style={[styles.brandText, {fontFamily: 'Inter_800ExtraBold'}]}>BeeNotify</Text>
                </View>
            </View>
            <View style={styles.middleView}>
                <ImageBackground source={require('../../assets/Union.png')} style={styles.imageBackground}>
                    <View style={styles.contentLogin}>
                    <Text style={[styles.registerText, {fontFamily: 'Inter_900Black'}]}>E-mail</Text>
                        <TextInput 
                            style={styles.textInputEmail}
                            placeholder="DIGITE SEU ENDEREÇO DE E-MAIL" 
                            placeholderTextColor= '#acabab'
                            value={email}
                            onChangeText={(textEmail) => setEmail(textEmail)}/>
                        <TouchableOpacity style={styles.styleButtomLogin} onPress={recovery}>
                            <View style={styles.connectivityStatus}>
                                <Text style={[styles.textButtom, {fontFamily: 'Inter_800ExtraBold'}]}>Enviar Email</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default PasswordRecovery;