/* import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Estilo from './components/Estilo';

//Tela inicial com botões

function HomeScreen({ navigation }) {
  return (
    <View style={Estilo.App}>
      <Text style={Estilo.fontG}>Como você está hoje?</Text>

      <View style={Estilo.container}>
      <TouchableOpacity
        title="Feliz"
        onPress={() => navigation.navigate('Feliz')}>
        <Image style={Estilo.button} source={require("./assets/feliz.png")}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Triste"
        onPress={() => navigation.navigate('Triste')}>
        <Image style={Estilo.button} source={require("./assets/triste.png")}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Bravo"
        onPress={() => navigation.navigate('Bravo')}>
        <Image style={Estilo.button} source={require("./assets/bravo.png")}/>
      </TouchableOpacity>
      </View>

      <View style={Estilo.container}>
      <TouchableOpacity
        title="Rico"
        onPress={() => navigation.navigate('Rico')}>
        <Image style={Estilo.button} source={require("./assets/rico.png")}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Sonolento"
        onPress={() => navigation.navigate('Sonolento')}>
        <Image style={Estilo.button} source={require("./assets/sonolento.png")}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Doente"
        onPress={() => navigation.navigate('Doente')}>
        <Image style={Estilo.button} source={require("./assets/doente.png")}/>
      </TouchableOpacity>
      </View>
    </View>
  );
}

//Telas

function FelizScreen({ navigation }) {
  return (
    <View style={Estilo.App}>
      <Text style={Estilo.fontG}>Que bom que você está feliz. Tenha um ótimo dia!</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={Estilo.button} source={require("./assets/voltar.png")}/>
      </TouchableOpacity>
    </View>
  );
}

function TristeScreen({ navigation }) {
  return (
    <View style={Estilo.App}>
      <Text style={Estilo.fontG}>Não fique triste, tudo vai melhorar. Podemos te ajudar em algo? Se sim clique em avançar, ou volte para a tela principal.</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={Estilo.button} source={require("./assets/voltar.png")}/>
      </TouchableOpacity>
      <TouchableOpacity
        title="Ajudar"
        onPress={() => navigation.navigate('Ajudar')}>
        <Image style={Estilo.button} source={require("./assets/avancar.png")}/>
      </TouchableOpacity>
    </View>
  );
}

function BravoScreen({ navigation }) {
  return (
    <View style={Estilo.App}>
      <Text style={Estilo.fontG}>Eita! Tome uma água com açúcar que ajuda!</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={Estilo.button} source={require("./assets/voltar.png")}/>
      </TouchableOpacity>
    </View>
  );
}

function RicoScreen({ navigation }) {
  return (
    <View style={Estilo.App}>
      <Text style={Estilo.fontG}>Recebeu hoje, foi?</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={Estilo.button} source={require("./assets/voltar.png")}/>
      </TouchableOpacity>
    </View>
  );
}

function SonolentoScreen({ navigation }) {
  return (
    <View style={Estilo.App}>
      <Text style={Estilo.fontG}>Toma um café que ajuda.</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={Estilo.button} source={require("./assets/voltar.png")}/>
      </TouchableOpacity>
    </View>
  );
}

function DoenteScreen({ navigation }) {
  return (
    <View style={Estilo.App}>
      <Text style={Estilo.fontG}>Ao persistirem os sintomas um médico deverá ser consultado.</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={Estilo.button} source={require("./assets/voltar.png")}/>
      </TouchableOpacity>
    </View>
  );
}

function AjudarScreen({ navigation }) {

  const [text, onChangeText] = React.useState();

  return (
    <View style={Estilo.App}>

      <TextInput style={Estilo.input}
        onChangeText={text => onChangeText(text)}
        value={text}
        placeholder="Como podemos te ajudar?"
      />

      <TouchableHighlight onPress={() => navigation.navigate('Feedback', {paramKey: text})}>
        <View style={Estilo.buttonEnviar}>
          <Text>Enviar</Text>
        </View>
      </TouchableHighlight>
      
      <TouchableOpacity
        title="Triste"
        onPress={() => navigation.navigate('Triste')}>
        <Image style={Estilo.button} source={require("./assets/voltar.png")}/>
      </TouchableOpacity>

    </View>
  );
}

function FeedbackScreen({ navigation, route }) {
  return (
    <View style={Estilo.App}>
      <Text style={Estilo.fontG}>Recebemos o seguinte feedback:{'\n'}{route.params.paramKey}</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={Estilo.button} source={require("./assets/voltar.png")}/>
      </TouchableOpacity>
    </View>
  );
}

//Pilha de navegação entre telas

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Feliz" component={FelizScreen} />
        <Stack.Screen name="Triste" component={TristeScreen} />
        <Stack.Screen name="Bravo" component={BravoScreen} />
        <Stack.Screen name="Rico" component={RicoScreen} />
        <Stack.Screen name="Sonolento" component={SonolentoScreen} />
        <Stack.Screen name="Doente" component={DoenteScreen} />
        <Stack.Screen name="Ajudar" component={AjudarScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; */