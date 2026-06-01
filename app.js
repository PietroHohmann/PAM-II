/*Instalar a biblioteca do Slider:
  npx expo install @react-native-community/slider*/
import { Text, View, TextInput, StyleSheet, Switch, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider'; //importação da biblioteca Slider que foi instalada
export default function App() {
  const [nome,setNome]=useState('');
  const [not,setNot]=useState(true);
  const [dif,setDif]=useState(S);
  return (<View><ScrollView>
    <Text>Configuração de Perfil</Text>
    <View><Text>Nome:</Text><TextInput placeholder="João da Silva..." /></View>
    value={nome} onChangeText={(V)=>(setNot(V))} trackColor={()}
    <View><Text>Receber notificações:</Text><Switch /></View>
    {/* COMPONENTE NUMÉRICO (Slider) */}
    <View><Text>Nível de dificuldade:</Text><Slider minimumValue={1} maximumValue={10} minimumTrackTintColor="#cc0000" maximumTrackTintColor="#000" /></View>
    <View><Text>Imput</Text><Text>Switch
    </Text><Text>Slider</Text></View>
  </ScrollView></View>)
}
