import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import api from './src/services/api'

export default function App(){

  const[cep, setCep] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}> Digite o Cep desejado</Text>
        <TextInput
        style={styles.input}
        placeholder="Ex: 563000000"
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        keyboardType='numeric'
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor:'#1275cd'}]}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor:'#cd3e1d'}]}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 563000000</Text>
        <Text style={styles.itemText}>Logradouro: Rua 02</Text>
        <Text style={styles.itemText}>Bairro: Centro</Text>
        <Text style={styles.itemText}>Cidade: Petrolina</Text>
        <Text style={styles.itemText}>Estado: PE</Text>
      </View>
   </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    padding:12,
    borderRadius:5,
    
  },
  botaoText:{
    fontSize: 22,
    color:'#FFF',

  },
  resultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText:{
    fontSize: 22,
  }
})