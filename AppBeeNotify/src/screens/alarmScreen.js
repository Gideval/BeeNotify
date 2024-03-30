import React, { useEffect, useState} from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useFonts, Inter_900Black, Inter_800ExtraBold, Inter_400Regular } from "@expo-google-fonts/inter";
import { styles } from "../components";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import * as Linking  from 'expo-linking'; 


function AlarmScreen (){
    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_800ExtraBold,
        Inter_400Regular
    });

    if (!fontsLoaded && fontError) {
        return null;
    }

    const [sound, setSound] = useState(new Sound());

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../../assets/Alarm.mp3'));
        setSound(sound);

        await sound.playAsync();
    } 
    
    async function pauseSound() {
        if(sound) {
            await sound.pauseAsync();
        }
    }

    const phoneCall = () => {
        let phoneNumber = '190';
        Linking.openURL(`tel:${phoneNumber}`);
    }
    
    useEffect(() => {
        playSound();
        
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.topViewAlarm}>
                <Image source={require('../../assets/abelha.png')} style={styles.responsiveImageAlarm}/>
                <Text style={[styles.brandText, {fontFamily:'Inter_800ExtraBold'}]}>BeeNotify</Text>
                <View style= {styles.space}></View>
                <Image source={require('../../assets/SinoAlarme.png')} style={styles.responsiveImageBell}/>
                <View style= {styles.space}></View>
                <Text style={[styles.brandText, {fontFamily:'Inter_800ExtraBold'}]}>ATENÇÃO</Text>
                <View style= {styles.space}></View>
                <Text style={[styles.AlarmText, {fontFamily: 'Inter_800ExtraBold'}]}>O alarme do apiário disparou!</Text>
            </View>
            <View style={styles.middleViewAlarm}>
                <ImageBackground source={require('../../assets/Union.png')} style={styles.imageBackground}>
                    <View style={styles.content}>
                        <TouchableOpacity style={styles.alarmButtom} onPress={pauseSound}>
                            <View style={styles.connectivityStatus}>
                                <MaterialIcons name="alarm-off" size={24} color="#FFF" />
                                <Text style={[styles.textButtom, {fontFamily: 'Inter_400Regular'}]}>DESATIVAR ALARME</Text>
                            </View>
                        </TouchableOpacity>
                        <View style= {styles.space}></View>
                        <TouchableOpacity style={styles.callButtom} onPress={phoneCall}>
                            <View style={styles.connectivityStatus}>
                            <MaterialCommunityIcons name="shield-star" size={24} color="#FFF" />
                                <Text style={[styles.textButtom, {fontFamily: 'Inter_400Regular'}]}>ACIONAR AUTORIDADES</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default AlarmScreen;