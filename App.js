import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, View } from 'react-native';
import ImagemLogo from './src/components/ImagemLogo'
     

class App extends Component{
  

  constructor(props){
    super(props);
    this.state = {
            
      curso: 0,
      cursos: [
        {keyC: 1, nomeC: 'Curso'},
        {keyC: 2, nomeC: 'Administração'},
        {keyC: 3, nomeC: 'Biologia'},
        {keyC: 4, nomeC: 'Contábeis'},
        {keyC: 5, nomeC: 'Sistemas de Informação'},
        {keyC: 6, nomeC: 'Química'},
      ],

      periodo: 0,
      periodos: [
        {keyP: 1, nomeP: 'Período'},
        {keyP: 2, nomeP: '1º'},
        {keyP: 3, nomeP: '2º'},
        {keyP: 4, nomeP: '3º'},
        {keyP: 5, nomeP: '4º'},
        {keyP: 6, nomeP: '5º'},
        {keyP: 7, nomeP: '6º'},
        {keyP: 8, nomeP: '7º'},
        {keyP: 9, nomeP: '8º'},
      ],

      turno: 0,
      turnos: [
        {keyT: 1, nomeT: 'Turno'},
        {keyT: 2, nomeT: 'Matutino'},
        {keyT: 3, nomeT: 'Vespertino'},
        {keyT: 4, nomeT: 'Noturno'}
      ],

      nomeCX: ''
    }
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({nomeCX: texto});
    }else{
      this.setState({nomeCX: ''});
    }
  }  

  
  render(){
    let cursosItem = this.state.cursos.map((vC, kC) => {
      return <Picker.Item keyC={kC} value={kC} label={vC.nomeC} />
    })

    let periodosItem = this.state.periodos.map((vP, kP) => {
      return <Picker.Item keyP={kP} value={kP} label={vP.nomeP} />
    })

    let turnosItem = this.state.turnos.map((vT, kT) => {
      return <Picker.Item keyP={kT} value={kT} label={vT.nomeT} />
    })
    

    return (
      <View style={{flex: 1}}> 
        <View style={{height: 120, backgroundColor: 'blue'}}>
          <ImagemLogo
            largura={87}
            altura={81}
          />

        </View>     
        <SafeAreaView style={styles.container}>                    
          <Text style={styles.menu}>Selecione os parâmetros:</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder='Digite seu Nome'
              onChangeText={this.pegaNome}
            />
          </View>

          <Picker
            style={styles.input}
            selectedValue={this.state.curso}
            onValueChange={(itemValue) => this.setState({curso: itemValue})}
          >
            {cursosItem}         
          </Picker>

          <Picker
            style={styles.input}
            selectedValue={this.state.periodo}
            onValueChange={(itemValue) => this.setState({periodo: itemValue})}
          >
            {periodosItem}         
          </Picker>

          <Picker
            style={styles.input}
            selectedValue={this.state.turno}
            onValueChange={(itemValue) => this.setState({turno: itemValue})}
          >
            {turnosItem}         
          </Picker>

          <Text style={styles.texto}>Informações Inseridas:</Text>

          <Text style={styles.caixas}>Nome: {this.state.nomeCX}</Text>


          <Text style={styles.caixas}>Curso: {this.state.cursos[this.state.curso].nomeC}</Text>
          <Text style={styles.caixas}>
            Período: {this.state.periodos[this.state.periodo].nomeP}{'          '}
            Turno: {this.state.turnos[this.state.turno].nomeT}
          </Text>
          
          
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    marginTop: 10
  },
  menu:{
    fontSize: 20,
    fontWeight: 'normal',
  },
  caixas:{
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10
  },
  input: {
    width: 340,
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    padding: 10,
    margin: 10
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default App;