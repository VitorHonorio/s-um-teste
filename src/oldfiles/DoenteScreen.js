import React from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Estilo from "../components/Estilo";

export function DoenteScreen({ navigation }) {
    return (
      <>
        <View style={Estilo.Top}>
          <TouchableOpacity title="Main" onPress={() => navigation.navigate('Main')}>
              <Icon name='arrow-left' size={30} style={Estilo.seta} />
          </TouchableOpacity>
        </View>

        <View style={Estilo.App}>
          <Text style={Estilo.font}>Ao persistirem os sintomas um médico deverá ser consultado.</Text>
          <Text>{'\n'}</Text>
          <Text style={Estilo.fontmenor}>Podemos te ajudar em algo? Nos envie uma mensagem clicando abaixo, ou volte para a tela principal.</Text>

          <TouchableOpacity
            title="Ajudar"
            onPress={() => navigation.navigate('Ajudar')}>
            <Icon name='message-circle' size={50} style={Estilo.ajuda}/>
          </TouchableOpacity>
        </View>
      </>
    );
  }