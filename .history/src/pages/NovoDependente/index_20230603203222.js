import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Text, Input, Card, ButtonGroup} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function NovoDependente() {
  const navigation = useNavigation();
  const tiposDeVeiculo = ['Carro', 'Moto'];
  const [dependente, setDependente] = useState({
    nome: '',
    dataNascNasc: '',
    rg: '',
    cpf: '',
    telefone: '',
    email: '',
    veiculo: {
      tipo: null,
      modelo: '',
      cor: '',
      placa: '',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <LinearGradient
          colors={['#0655A4', '#3CB4E7']}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Button
            type="clear"
            onPress={() => navigation.goBack()}
            icon={{type: 'feather', name: 'arrow-left', color: '#fefefe'}}
            buttonStyle={{paddingRight: 20}}
          />
          <Text
            style={{
              color: '#fefefe',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Novo Dependente
          </Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerMain}>
        <Input
          label="Nome"
          placeholder="Digite o nome do dependente"
          labelStyle={{color: '#202020'}}
          value={dependente.nome}
          onChangeText={val => setDependente({...dependente, nome: val})}
        />
        <Input
          label="Data de Nascimento"
          placeholder="00/00/0000"
          labelStyle={{color: '#202020'}}
          value={dependente.dataNasc}
          onChangeText={val => setDependente({...dependente, dataNasc: val})}
        />
        <Input
          label="CPF"
          placeholder="000.000.000-00"
          labelStyle={{color: '#202020'}}
          value={dependente.cpf}
          onChangeText={val => setDependente({...dependente, cpf: val})}
        />
        <Input
          label="Telefone"
          placeholder="(00) 00000-0000"
          labelStyle={{color: '#202020'}}
          value={dependente.telefone}
          onChangeText={val => setDependente({...dependente, telefone: val})}
        />
        <Input
          label="E-mail"
          placeholder="email@email.com"
          labelStyle={{color: '#202020'}}
          value={dependente.email}
          onChangeText={val => setDependente({...dependente, email: val})}
        />

        <Card containerStyle={{borderRadius: 10, marginBottom: 25}}>
          <Card.Title>Selecione o tipo do veículo do dependente</Card.Title>
          <Card.Divider />
          <ButtonGroup
            buttons={tiposDeVeiculo}
            selectedIndex={dependente.veiculo.tipo}
            vertical
            onPress={value => {
              setDependente({...dependente, veiculo: {...dependente.veiculo, tipo: value}});
            }}
            containerStyle={{borderRadius: 10}}
            buttonContainerStyle={{borderRadius: 10, marginVertical: 10}}
            buttonStyle={{borderRadius: 10}}
          />
        </Card>
        
        <Input
          label="Modelo"
          placeholder="Digite o modelo do veículo"
          labelStyle={{color: '#202020'}}
          value={dependente.veiculo.modelo}
          onChangeText={val => setDependente({...dependente, modelo: val})}
        />
        <Input
          label="Cor"
          placeholder="Digite a cor do veículo"
          labelStyle={{color: '#202020'}}
          value={dependente.veiculo.cor}
          onChangeText={val => setDependente({...dependente, cor: val})}
        />
        <Input
          label="Placa"
          placeholder="Digite a placa do veículo"
          labelStyle={{color: '#202020'}}
          onChangeText={val => {
            setDependente({...dependente, veiculo: {...dependente.veiculo, placa: val.toUpperCase()}})
          }
          }
        />

        <Button
          buttonStyle={{
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
            marginVertical: '5%',
            marginBottom: 50
          }}
          titleStyle={{fontWeight: 'bold'}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#3CB4E7', '#0655A4'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          title="Cadastrar"
          onPress={() => {
            console.log(dependente);
          }}
        />
      </ScrollView>
    </View>
  );
}
