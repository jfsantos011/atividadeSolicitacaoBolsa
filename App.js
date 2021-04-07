import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, ScrollView } from 'react-native'
import ImagemLogo from './src/components/ImagemLogo'

import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isResultsVisible: false,
      name: '',
      age: 0,
      selectedGenderIndex: 0,
      generos: [
        { id: 0, text: 'Selecione', enabled: false },
        { id: 1, text: 'Masculino' },
        { id: 2, text: 'Feminino' },
        { id: 3, text: 'Outro' }
      ],
      earnings: 0,
      selectedCourseIndex: 0,
      cursos: [
        {id: 0, text: 'Curso', enabled: false },
        {id: 2, text: 'Administração'},
        {id: 3, text: 'Biologia'},
        {id: 4, text: 'Contábeis'},
        {id: 5, text: 'Sistemas de Informação'},
        {id: 6, text: 'Química'},
      ],
      selectedPeriodIndex: 0,
      periodos: [
        { id: 0, text: 'Período', enabled: false },
        { id: 1, text: '1º' },
        { id: 2, text: '2º' },
        { id: 3, text: '3º' },
        { id: 4, text: '4º' },
        { id: 5, text: '5º' },
        { id: 6, text: '6º' },
        { id: 7, text: '7º' },
        { id: 8, text: '8º' },
        { id: 9, text: '9º' },
        { id: 10, text: '10º' },
      ],
      selectedShiftIndex: 0,
      turnos: [
        { id: 0, text: 'Turno', enabled: false },
        { id: 1, text: 'Matutino' },
        { id: 2, text: 'Vespertino' },
        { id: 3, text: 'Noturno' }
      ]
    }

    this.validateInfo = this.validateInfo.bind(this)
  }

  validateInfo () {
    if (
      this.state.name === '' ||
      this.state.age === 0 ||
      this.state.earnings === 0 ||
      this.state.selectedGenderIndex === 0 ||
      this.state.selectedCourseIndex === 0 ||
      this.state.selectedPeriodIndex === 0 ||
      this.state.selectedShiftIndex === 0
    ) {
      alert('Você deve preencher todos os campos obrigatórios!')
    } else {
      this.state.isResultsVisible = true
    }
  }

  render () {
    return (
      <ScrollView>
      <View style={styles.containerView}>
        <View style={styles.headerView}>
        <ImagemLogo
            largura={41}
            altura={38}
          />
        </View>

        <View style={styles.body}>
          <View style={styles.formWrapper}>
            <Text style={styles.instruction}>
              Preenche os campos para realizar seu cadastro
            </Text>

            <Text style={styles.labelText}>
              Nome* :
            </Text>
            <TextInput
              style={styles.inputText}
              placeholder="Digite o Nome"
              keyboardType="default"
              onChangeText={(value) => this.setState({ name: value })}
            />

            <Text style={styles.labelText}>
              Idade* :
            </Text>
            <TextInput
              style={styles.inputText}
              keyboardType="numeric"
              onChangeText={(value) => this.setState({ age: value })}
            />

            <Text style={styles.labelText}>
              Gênero :
            </Text>
            <Picker
              selectedValue={this.state.selectedCourseIndex}
              onValueChange={(value) => this.setState({ selectedGenderIndex: value })}
              style={styles.inputPicker}
            >
              {
                this.state.generos.map((item, index) => (
                  <Picker.Item key={item.id} value={index} labelText={item.text} enabled={item.enabled || true} />
                ))
              }
            </Picker>

            <Text style={styles.labelText}>
              Renda : R$ {this.state.earnings.toFixed(2)}
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={10000}
              step={100}
              thumbTintColor="#3d8af7"
              minimumTrackTintColor="#3d8af7"
              onValueChange={(value) => this.setState({ earnings: value })}
            />

            <Text style={styles.labelText}>
              Curso :
            </Text>
            <Picker
              selectedValue={this.state.selectedCourseIndex}
              onValueChange={(value) => this.setState({ selectedCourseIndex: value })}
              style={styles.inputPicker}
            >
              {
                this.state.cursos.map((item, index) => (
                  <Picker.Item key={item.id} value={index} labelText={item.text} enabled={item.enabled || true} />
                ))
              }
            </Picker>

            <Text style={styles.labelText}>
              Período :
            </Text>
            <Picker
              selectedValue={this.state.selectedPeriodIndex}
              onValueChange={(value) => this.setState({ selectedPeriodIndex: value })}
              style={styles.inputPicker}
            >
              {
                this.state.periodos.map((item, index) => (
                  <Picker.Item key={item.id} value={index} labelText={item.text} enabled={item.enabled || true} />
                ))
              }
            </Picker>

            <Text style={styles.labelText}>
              Turno:
            </Text>
            <Picker
              selectedValue={this.state.selectedShiftIndex}
              onValueChange={(value) => this.setState({ selectedShiftIndex: value })}
              style={styles.inputPicker}
            >
              {
                this.state.turnos.map((item, index) => (
                  <Picker.Item key={item.id} value={index} labelText={item.text} enabled={item.enabled || true} />
                ))
              }
            </Picker>
          </View>

          <TouchableOpacity
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#3d8af7',
              borderRadius: 3,
              padding: 12,
              alignItems: 'center',
            }}
            onPress={this.validateInfo}
          >
            <Text style={{ color: '#fff' }}>Salvar informações</Text>
          </TouchableOpacity>

          <View style={styles.insertedInformation}>
            <Text style={styles.insertedTitle}>
              Informações inseridas:
            </Text>

            <View style={styles.row}>
              <Text style={styles.labelText}> Nome: </Text>
              <Text style={styles.info}> {this.state.name} </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.labelText}> Curso: </Text>
              <Text style={styles.info}>
                {this.state.cursos[this.state.selectedCourseIndex].text}
              </Text>
            </View>

            <View style={[styles.row, styles.separated]}>
              <View style={styles.row}>
                <Text style={styles.labelText}> Período: </Text>
                <Text style={styles.info}>
                  {this.state.periodos[this.state.selectedPeriodIndex].text}
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.labelText}> Turno: </Text>
                <Text style={styles.info}>
                  {this.state.turnos[this.state.selectedShiftIndex].text}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    maxHeight: 50,
    width: '100%',
    backgroundColor: '#3d8af7',
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  headerImg: {
    fontSize: 24,
    color: '#fff'
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 16
  },
  formWrapper: {
    width: '100%',
    marginBottom: 16
  },
  instruction: {
    fontSize: 20
  },
  mandatoryLabel: {
    fontSize: 14,
    color: 'red',
    marginBottom: 8
  },
  inputText: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 16
  },
  inputPicker: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginVertical: 8,
    paddingHorizontal: 8
  },
  insertedTitle: {
    fontSize: 20,
    marginBottom: 16
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8
  },
  separated: {
    justifyContent: 'space-between'
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 14,
    top: 5
  },
  info: {
    fontSize: 16
  }
});
