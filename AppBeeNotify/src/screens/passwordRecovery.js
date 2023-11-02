import React, { useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts, Inter_800ExtraBold } from "@expo-google-fonts/inter"
import { useNavigation} from "@react-navigation/native"
import { styles } from "../components";
import firebaseDB from "../backend/firebaseDB";

function PasswordRecovery () {
    const navigation = useNavigation();
    const db = firebaseDB();

    const [ email, setEmail] = useState('');

    let [fontsLoaded, fontError] = useFonts({
        Inter_800ExtraBold,
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
                    <Text>Email</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TouchableOpacity onPress={recovery}>
                        <View style={styles.botao}>
                            <Text style={styles.textoBotao}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}

export default PasswordRecovery;