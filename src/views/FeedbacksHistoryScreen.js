import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native'
import auth, { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Estilo from "../components/Estilo"

export function FeedbacksHistoryScreen({ navigation }) {
 
  const {t} = useTranslation()

  const usuario = firebase.auth().currentUser.email

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Feedbacks')
      .where('user', '==', usuario)
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
        setLoading(false);
      });
  
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />
  } return (
    <>
      <View style={Estilo.Top}>
        <TouchableOpacity
          title="Main"
          onPress={() => navigation.navigate('Main')
        }>
          <Icon name='arrow-left-bold-circle-outline' size={30} style={Estilo.seta} />
        </TouchableOpacity>
      </View>

      <View style={Estilo.App}>
        <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text style={Estilo.fontPP}>Usuário: {item.user}</Text> */}
            <Text style={Estilo.fontPP}>Feedback: {item.message}</Text>
            <Text style={Estilo.fontPP}>Data: {item.create_at}</Text>
          </View>
        )}/>
      </View> 
    </>
  );
}