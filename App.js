import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      endereco : ''
    }

  }
  componentDidMount(){

    axios
    .get('https://viacep.com.br/ws/07262130/json')
    .then(response => {

      this.setState({

        endereco : response.data

      })

    })

  };

  render(){
   
    return(
      <View style={ styles.container }>
        <Text  style={ styles.text2 }>Busca CEP</Text>
        <Text style={ styles.text }>CEP: { this.state.endereco.cep }</Text>
        <Text style={ styles.text }>LOGRADOURO: { this.state.endereco.logradouro }</Text>
        <Text style={ styles.text }>COMPLEMENTO: { this.state.endereco.complemento }</Text>
        <Text style={ styles.text }>BAIRRO: { this.state.endereco.bairro }</Text>
        <Text style={ styles.text }>LOCALIDADE: { this.state.endereco.localidade }</Text>
        <Text style={ styles.text }>UF: { this.state.endereco.uf }</Text>
        <Text style={ styles.text }>IBGE: { this.state.endereco.ibge }</Text>
        <Text style={ styles.text }>GIA: { this.state.endereco.gia }</Text>
        <Text style={ styles.text }>DDD: { this.state.endereco.ddd }</Text>
        <Text style={ styles.text }>SIAFI: { this.state.endereco.siafi }</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6003e5'
  },
  text2: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0e0f10'
  }
  
});