import React from "react";
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useTranslation } from 'react-i18next'
import Estilo from "../components/Estilo"

export function FeedbackScreen({ navigation, route }) {
 
  const {t} = useTranslation()

    return (
      <>
        <View style={Estilo.Top}>
          <TouchableOpacity
            title="Main"
            onPress={() => navigation.navigate('Main')
          }>
            <Icon name='arrow-left' size={30} style={Estilo.seta} />
          </TouchableOpacity>
       </View>

        <View style={Estilo.App}>
          <Text style={Estilo.font}>{t("FeedbackRecebido")}{'\n'}{route.params.paramKey}</Text>
        </View>
      </>
    );
  }