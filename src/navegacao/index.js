import React, {useContext, useState, useEffect} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth, { Firebase, FirebaseAuthTypes } from '@react-native-firebase/auth'
import { MainScreen } from "../views/MainScreen";
import Stack from './stack';

// const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

// useEffect(() => {
//     const subscriber = auth().onAuthStateChanged()

//     return subscriber;
// }, []);

export default props => (    
    <View style={{flex:1}}>
        <NavigationContainer>
            {/* {user ? <MainScreen /> : <Stack />} */}
            <Stack />
        </NavigationContainer>
    </View>
)