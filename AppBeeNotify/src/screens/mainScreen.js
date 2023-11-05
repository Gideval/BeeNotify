import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { useFonts, Inter_800ExtraBold, Inter_400Regular} from "@expo-google-fonts/inter"
import { useNavigation, useRoute } from "@react-navigation/native"
import DateTimePickerModal from '@react-native-community/datetimepicker';
import firebaseDB from "../backend/firebaseDB";
import { styles } from "../components";

function MainScreen () {
    const navigation = useNavigation();
    const route = useRoute();
    const db = firebaseDB();

    const { userEmail } = route.params;

    const [date, setDate] = useState('');
    const [pickerDate, setPickerDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [id, setId] = useState();

    let [fontsLoaded, fontError] = useFonts({
        Inter_400Regular,
        Inter_800ExtraBold,
    });

    if (!fontsLoaded && fontError) {
        return null;
    }

    const getDataDB = async () => {
        const dataDB = await db.getData(userEmail);
        setDate(dataDB[0].date)
        setId(dataDB[0].id)
    }

    const onChangeDate = async (event, selectedDate) => {
    	
        if(event.type === 'set') {
            console.log('Entrou onchamgeDate')
            console.log(event.type)
            console.log(pickerDate.toLocaleDateString('pt-BR').replace(/\//g, '-'))
            console.log('Selectdate')
            console.log(selectedDate)
            const currentDate = selectedDate || pickerDate;
            setShowPicker(Platform.OS === 'ios');
            setPickerDate(currentDate);
            await db.updateData(id, currentDate.toLocaleDateString('pt-BR').replace(/\//g, '-'))

        }

    };

    const showDatepicker = () => {
        setShowPicker(true);
    };

    useEffect(() => {
        getDataDB();
        //date,
        //pickerDate,
        console.log('DataDB:', date);
      }, [date, id, pickerDate]);

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/abelha.png')} style={styles.responsiveImage} />
                    <Text style={[styles.brandText, {fontFamily: 'Inter_800ExtraBold'}]}>BeeNotify</Text>
                </View>
            </View>
            <View style={styles.middleView}>
                <ImageBackground source={require('../../assets/Union.png')} style={styles.imageBackground}>
                    <View style={styles.content}>
                        <Text style={[styles.textApiario, {fontFamily: 'Inter_400Regular'}]}>Olá</Text>
                        <Text style={styles.textUser}>Lucas Souza</Text>
                        <View style={styles.horizontalBar} />
                        <View style= {styles.space}></View>
                        <Text style={[styles.textApiario, {fontFamily: 'Inter_400Regular'}]}>Apiario da Colônia</Text>
                        <View style={styles.horizontalBar} />
                        <Text style={[styles.textDataSystem, {fontFamily: 'Inter_400Regular'}]}>DADOS DO SISTEMA</Text>
                        <View style= {styles.space}></View>
                        <View style={styles.connectivityStatus}>
                            <FontAwesome name="wifi" size={24} color="#CD6F00" />
                            <Text style={[styles.textStatus, {fontFamily: 'Inter_800ExtraBold'}]}>Conectividade</Text>
                        </View>
                        <Text style={[styles.textInformative, {fontFamily: 'Inter_400Regular'}]}>Status: </Text>
                        <TouchableOpacity style={styles.styleButtom}>
                            <View style={styles.connectivityStatus}>
                                <MaterialIcons name="refresh" size={24} color="#FFF" />
                                <Text style={[styles.textButtom, {fontFamily: 'Inter_400Regular'}]}>ATUALIZAR STATUS</Text>
                            </View>
                        </TouchableOpacity>
                        <View style= {styles.space}></View>
                        <View style={styles.connectivityStatus}>
                            <MaterialIcons name="date-range" size={25} color="#CD6F00" />
                            <Text style={[styles.textStatus, {fontFamily: 'Inter_800ExtraBold'}]}>Data de Recarga</Text>
                        </View>
                        <Text style={[styles.textInformative, {fontFamily: 'Inter_400Regular'}]}>Data de Recarga: {date}</Text>
                        <TouchableOpacity style={styles.styleButtom} onPress={showDatepicker} >
                            <View style={styles.connectivityStatus}>
                                <MaterialIcons name="refresh" size={24} color="#FFF" />
                                <Text style={[styles.textButtom, {fontFamily: 'Inter_400Regular'}]}>ATUALIZAR DATA</Text>
                            </View>
                        </TouchableOpacity>
                        {showPicker && (
                        <DateTimePickerModal
                            testID="dateTimePicker"
                            value={pickerDate}
                            mode="date"
                            is24Hour={true}
                            display="spinner"
                            onChange={onChangeDate}
                            backgroundColor="rgba(0, 0, 0, 0)"
                        />
                        )}
                    </View>
                </ImageBackground>
            </View>
        </View>
    )

}
export default MainScreen;
