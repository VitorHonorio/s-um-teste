import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Alert} from 'react-native'
import { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Estilo from "../components/Estilo"

export function AjudarScreen({ navigation }) {

  const {t} = useTranslation()

  // const getCurrentDate=()=>{
  //   var date = new Date().getDate();
  //   var month = new Date().getMonth() + 1;
  //   var year = new Date().getFullYear();
  
  //   var hora = new Date().getHours();
  //   var minuto = new Date().getMinutes();
    
  //   return date + '-' + month + '-' + year;
  // }

  const [message, setMessage] = useState('')

  new Date(firestore.FieldValue.serverTimestamp()).toDateString()

  function feedback() {
    firestore()
      .collection('Feedbacks')
      .add({
        message,
        user: firebase.auth().currentUser.email,
        create_at: Date()
      })
      .then(() => {
        Alert.alert(t("i18n.messagesent"), t("i18n.thanksfeeback"))
        navigation.navigate('Main')
      })
      .catch((error) => console.log(error))
  }
  
  return (
    <>
      <View style={Estilo.Top}>
        <TouchableOpacity
        title="Main"
        onPress={() => navigation.navigate('Main')}>
            <Icon name='arrow-left-bold-circle-outline' size={30} style={Estilo.seta} />
        </TouchableOpacity>
      </View>
      
      <View style={Estilo.App}>
  
        <TextInput style={Estilo.input}
          onChangeText={setMessage}
          placeholder={t("i18n.placeholder")}
        />
  
        <TouchableOpacity
          onPress={() => feedback()}>
          <Icon name='send' size={50} style={Estilo.ajuda} />
        </TouchableOpacity>
  
      </View>
    </>
  );
}