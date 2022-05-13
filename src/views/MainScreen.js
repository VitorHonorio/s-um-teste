import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import auth, { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore'
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Estilo from '../components/Estilo';

export function MainScreen({ navigation }) {

  const {t} = useTranslation()
  
  // firebase.auth().onAuthStateChanged((user) => {
  //   if(user) {
  //     const usuario = user.email
  //     console.warn("Bem-vindo " + usuario)
  //   }
  // })

  function handleSignOut() {
    auth()
      .signOut()
      .then(() => {
        Alert.alert(t("i18n.logout"), t("i18n.successfullyloggedout"))
        navigation.navigate('Login')
      })
  }

  new Date(firestore.FieldValue.serverTimestamp()).toDateString()

  function feedback(title) {
    firestore()
      .collection('Moods')
      .add({
        status: title, 
        user: firebase.auth().currentUser.email,
        create_at: Date()
      })
      .catch((error) => console.log(error))
  }


  return (
    <SafeAreaView style={Estilo.App}>

      <Image style={Estilo.logo} source={require("../assets/imagens/logo.png")}/>

      <Text style={Estilo.titlefont}>{t("i18n.mainmessage")}</Text>

      <View style={Estilo.container}>
      <TouchableOpacity
        title="Pleno"
        onPress={() => [feedback("Pleno"), navigation.navigate('Pleno')]}>
        <Icon name='emoticon-cool-outline' size={70} style={Estilo.plenoemoticon}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Feliz"
        onPress={() => [feedback("Feliz"), navigation.navigate('Feliz')]}>
        <Icon name='emoticon-outline' size={70} style={Estilo.felizemoticon}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Neutro"
        onPress={() => [feedback("Neutro"), navigation.navigate('Neutro')]}>
        <Icon name='emoticon-neutral-outline' size={70} style={Estilo.neutroemoticon}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Triste"
        onPress={() => [feedback("Triste"), navigation.navigate('Triste')]}>
        <Icon name='emoticon-sad-outline' size={70} style={Estilo.tristeemoticon}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Péssimo"
        onPress={() => [feedback("Péssimo"), navigation.navigate('Pessimo')]}>
        <Icon name='emoticon-dead-outline' size={70} style={Estilo.pessimoemoticon}/>
      </TouchableOpacity>

      </View>
      <View style={Estilo.container}>
        <TouchableOpacity
          title="Meus Moods"
          onPress={() => navigation.navigate('MoodsHistory')}
          style={{alignItems: "center"}}>
          <Icon name='emoticon-happy-outline' size={45} style={Estilo.ajuda} />
          <Text style={Estilo.fontPP}>{t("i18n.mymoods")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Meus Feedbacks"
          onPress={() => navigation.navigate('FeedbacksHistory')}
          style={{alignItems: "center"}}>
          <Icon name='comment-search-outline' size={45} style={Estilo.ajuda} />
          <Text style={Estilo.fontPP}>{t("i18n.myfeedbacks")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Logout"
          onPress={() => handleSignOut()}
          style={{alignItems: "center"}}>
          <Icon name='account-off-outline' size={45} style={Estilo.ajuda}/>
          <Text style={Estilo.fontPP}>{t("i18n.logout")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}