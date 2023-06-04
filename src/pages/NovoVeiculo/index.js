import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Text, Input, Card, ButtonGroup} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function NovoVeiculo() {
  const navigation = useNavigation();

  const tiposDeVeiculo = [
    'Carro',
    'Moto',
  ];

  const [veiculo, setVeiculo] = useState([
    {
      tipo: null,
      modelo: '',
      cor: '',
      placa: '',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <LinearGradient
          colors={['#008080', '#20B2AA']}
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
            Novo Veículo
          </Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerMain}>
      <Card containerStyle={{borderRadius: 10, marginBottom: 25}}>
          <Card.Title>Selecione o tipo do veículo</Card.Title>
          <Card.Divider />
          <ButtonGroup
            buttons={tiposDeVeiculo}
            selectedIndex={veiculo.tipo}
            vertical
            onPress={value => {
              setVeiculo({...veiculo, tipo: value});
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
          value={veiculo.modelo}
          onChangeText={val => setVeiculo({...veiculo, modelo: val})}
        />
        <Input
          label="Cor"
          placeholder="Digite a cor do veículo"
          labelStyle={{color: '#202020'}}
          value={veiculo.cor}
          onChangeText={val => setVeiculo({...veiculo, cor: val})}
        />
        <Input
          label="Placa"
          placeholder="Digite a placa do veículo"
          labelStyle={{color: '#202020'}}
          inputStyle={{textTransform: 'uppercase'}}
          value={veiculo.placa}
          onChangeText={val => setVeiculo({...veiculo, placa: val.toUpperCase()})}
        />

        <Button
          buttonStyle={{
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
            marginVertical: '5%',
          }}
          titleStyle={{fontWeight: 'bold'}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#20B2AA', '#008080'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          title="Cadastrar"
          onPress={() => {
            console.log(veiculo);
          }}
        />
      </ScrollView>
    </View>
  );
}
