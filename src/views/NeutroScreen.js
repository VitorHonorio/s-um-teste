import React from "react";
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import Estilo from "../components/Estilo";

export function NeutroScreen({ navigation }) {

  const {t} = useTranslation()

    return (
      <>
        <View style={Estilo.Top}>
          <TouchableOpacity title="Main" onPress={() => navigation.navigate('Main')}>
              <Icon name='arrow-left-bold-circle-outline' size={30} style={Estilo.seta} />
          </TouchableOpacity>
        </View>

        <View style={Estilo.App}>
          <Text style={Estilo.font}>{t("NeutroScreen")}</Text>
          <Text>{'\n'}</Text>
          <Text style={Estilo.fontmenor}>{t("FeedbackNegativo")}</Text>
          <TouchableOpacity
            title="Ajudar"
            onPress={() => navigation.navigate('Ajudar')}>
            <Icon name='comment-text-outline' size={50} style={Estilo.ajuda}/>
          </TouchableOpacity>
        </View>
      </>
    );
  }