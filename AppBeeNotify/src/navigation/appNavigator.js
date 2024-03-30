import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../screens/login";
import RegistrationPage from "../screens/registrationScreen";
import PasswordRecovery from "../screens/passwordRecovery";
import MainScreen from "../screens/mainScreen";
import AlarmScreen from "../screens/alarmScreen";

const stack = createStackNavigator();

function AppNavigator () {
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="LoginPage">
                <stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
                <stack.Screen name="RegistrationPage" component={RegistrationPage} options={{headerShown: false}} />
                <stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={{headerShown: false}} />
                <stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}} />
                <stack.Screen name="AlarmScreen" component={AlarmScreen} options={{headerShown: false}} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;