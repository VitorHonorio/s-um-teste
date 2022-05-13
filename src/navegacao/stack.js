import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AjudarScreen } from "../views/AjudarScreen";
import { NeutroScreen } from "../views/NeutroScreen";
import { FeedbackScreen } from "../views/FeedbackScreen";
import { PlenoScreen } from "../views/PlenoScreen";
import { MainScreen } from "../views/MainScreen";
import { TristeScreen } from "../views/TristeScreen";
import { PessimoScreen } from "../views/PessimoScreen";
import { FelizScreen } from "../views/FelizScreen";
import { LoginScreen } from "../views/LoginScreen";
import { SignupScreen } from "../views/SignupScreen";
import { MoodsHistoryScreen } from "../views/MoodsHistoryScreen";
import { FeedbacksHistoryScreen } from "../views/FeedbacksHistoryScreen";

const Stack = createNativeStackNavigator();

function App() {
  
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Pleno" component={PlenoScreen} />
          <Stack.Screen name="Feliz" component={FelizScreen} />
          <Stack.Screen name="Neutro" component={NeutroScreen} />
          <Stack.Screen name="Triste" component={TristeScreen} />
          <Stack.Screen name="Pessimo" component={PessimoScreen} />
          <Stack.Screen name="Ajudar" component={AjudarScreen} />
          <Stack.Screen name="Feedback" component={FeedbackScreen} />
          <Stack.Screen name="FeedbacksHistory" component={FeedbacksHistoryScreen} />
          <Stack.Screen name="MoodsHistory" component={MoodsHistoryScreen} />
        </Stack.Navigator>
    );
  }
  
  export default App;