import React, { useState } from 'react';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, Image, Alert } from 'react-native';
import auth from'@react-native-firebase/auth'
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Estilo from '../components/Estilo';

export function LoginScreen({ navigation }) {

  const {t} = useTranslation()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false)
  
  function validateEmail(email) {
    const expression = /(\W|^)[\w.\-]{0,25}@(fitec)\.org.br$/
    return expression.test(String(email).toLowerCase())
  }

  function handleSignIn() {
    setIsLoading(true)

    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert(t("LoginSucesso"), t("i18n.welcome"))
      navigation.navigate('Main')
    })
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false))
  }

  function handleForgotPassword() {
    auth()
    .sendPasswordResetEmail(email)
    .then (() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você."))
  }

  const entrar = () => {
    if (validateEmail(email)) {
      handleSignIn()
    } else {
      alert("Usuário ou senha incorretos")
    }
  }

    return (
      <KeyboardAvoidingView style={Estilo.loginScreen}>

        {/* <Image style={Estilo.logoLogin} source={require("../assets/imagens/logo.png")}/> */}
        
        <Text style={Estilo.titlefont}>{t("i18n.welcome")}{'\n'}</Text>

        <TextInput
        style={Estilo.inputLogin}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder={t("i18n.email")}
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <>
        <Text>{'\n'}</Text>
      </>

      <TextInput
        style={Estilo.inputLogin}
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder={t("i18n.password")}
        iconType="lock"
        secureTextEntry={true}
      />

      <View>
        <TouchableOpacity
          onPress={() => entrar()}
          isLoading={isLoading}
          style={{alignItems: "center"}}>
          <Icon name='account-arrow-right-outline' size={45} style={Estilo.ajuda} />
          <Text style={Estilo.fontPP}>{t("i18n.signin")}</Text>
        </TouchableOpacity>
      </View>
        
      <View style={Estilo.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{alignItems: "center"}}>
          <Icon name='account-plus-outline' size={45} style={Estilo.ajuda}/>
          <Text style={Estilo.fontPP}>{t("i18n.register")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleForgotPassword}
          style={{alignItems: "center"}}>
          <Icon name='email-outline' size={45} style={Estilo.ajuda} />
          <Text style={Estilo.fontPP}>{t("i18n.forgotpassword")}</Text>
        </TouchableOpacity>

      </View>

      </KeyboardAvoidingView>
    );
  }