import { StyleSheet, View, Text } from 'react-native';
// import HelloRN from './components/01HelloRN';
import Questao01 from './components/tarefa01/Questao01';
// import Questao03 from './components/tarefa01/Questao03';

export default function App() {
  return (
    <View style={estilos.container01}>
        {/* <HelloRN/> */}
        <Questao01/>
        <Text style = {estilos.nome}> Nome completo: Sávila Letícia Amancio Oliveira </Text>
        <Text style = {estilos.cidade}> Cidade: Quixeramobim - CE </Text>
        <Text style = {estilos.curso}>  Curso: Design Digital - 6° semestre </Text>
        {/* <Questao03 color = "red" /> */}
    </View>
  );
}

const estilos = StyleSheet.create({

  container01: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nome: {
    fontWeight: "bold",
    fontSize: 30
  },

  cidade: {
    fontSize: 20
  },

  curso: {
    color: "red",
    fontSize:20
  }

});
