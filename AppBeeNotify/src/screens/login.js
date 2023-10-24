import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton, styles } from '../components/index';

function LoginPage () {

    const handleButtonPress = () => {
        alert('Botão Pressionado', 'Ação executada ao pressionar o botão');
      };

    return(
        <View style={styles.container} >
            <View style={styles.container} ></View>
            <Image source={require('../../assets/abelha.png')} style={styles.image}/>
            <Text style={styles.title}>BeeNotify</Text>
            <View style={styles.container} ></View>
            <LinearGradient colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.5)']} 
                style={styles.gradient}>
                        <TextInput style={styles.input} placeholder="Digite algo" />
                        <TextInput style={styles.input} placeholder="Digite algo" />
                        <Button title="Clique Aqui" onPress={() => alert('Botão clicado!')} />
                        <TouchableOpacity onPress={() => alert('Texto clicável clicado!')}>
                            <Text style={styles.clickableText}>Texto Clicável</Text>
                        </TouchableOpacity>
            </LinearGradient>
            
            <StatusBar style="auto" />
        </View>
    );
}

export default LoginPage;