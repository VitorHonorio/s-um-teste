import React, { useState } from 'react';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, Alert, isLoading } from 'react-native';
import { useTranslation } from 'react-i18next';
import auth from'@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Estilo from '../components/Estilo';

export function SignupScreen({ navigation }) {
  const {t} = useTranslation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  function handleNewAccount() {
    setIsLoading(true);

    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert(t("i18n.registration"), t("i18n.successfullyregistrated"))
      navigation.navigate('Login')
    })
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false))
  }
  
  function validateEmail(email) {
    const expression = /(\W|^)[\w.\-]{0,25}@(fitec)\.org.br$/
    return expression.test(String(email).toLowerCase())
  }

  const registrar = () => {
    if (validateEmail(email)) {
      handleNewAccount()
    } else {
      Alert.alert(t("i18n.incorrectemail"), t("i18n.typevalidemail"))
    }
  }

    return (
      <>
        <View style={Estilo.Top}>
          <TouchableOpacity title="goback" onPress={() => navigation.navigate('Login')}>
            <Icon name='arrow-left' size={30} style={Estilo.seta} />
          </TouchableOpacity>
        </View>
      
        <KeyboardAvoidingView style={Estilo.loginScreen}>
          
          <Text style={Estilo.titlefont}>{t("i18n.registration")}</Text>

          <View>
            <Text>{'\n'}</Text>
          </View>

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

          <View>
          <Text>{'\n'}</Text>
          </View>

          <TextInput
            style={Estilo.inputLogin}
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholder={t("i18n.password")}
            iconType="lock"
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => registrar()}
            isLoading={isLoading}
            style={{alignItems: "center"}}>
            <Icon name='account-check-outline' size={50} style={Estilo.ajuda} />
            <Text style={Estilo.fontPP}>{t("i18n.register")}</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </>
    );
  }