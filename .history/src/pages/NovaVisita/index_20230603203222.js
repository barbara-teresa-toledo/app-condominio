import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Text, Input, CheckBox} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function NovaVisita() {
  const navigation = useNavigation();
  const [selectedIndex, setIndex] = React.useState(2);
  const [visitante, setVisitante] = useState([
    {
      nome: '',
      data: '',
      horaInicio: '',
      horaLimite: '',
      telefone: '',
      email: '',
      cpf: '',
    },
  ]);

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
            Nova Visita
          </Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerMain}>
        <Input
          label="Nome"
          placeholder="Digite o nome do visitante"
          labelStyle={{color: '#202020'}}
          value={visitante.nome}
          onChangeText={val => setVisitante({...visitante, nome: val})}
        />
        <Input
          label="Telefone"
          placeholder="(00) 00000-0000"
          labelStyle={{color: '#202020'}}
          value={visitante.telefone}
          onChangeText={val => setVisitante({...visitante, telefone: val})}
        />
        <Input
          label="E-mail"
          placeholder="email@email.com"
          labelStyle={{color: '#202020'}}
          value={visitante.email}
          onChangeText={val => setVisitante({...visitante, email: val})}
        />
        <Input
          label="CPF"
          placeholder="000.000.000-00"
          labelStyle={{color: '#202020'}}
          value={visitante.cpf}
          onChangeText={val => setVisitante({...visitante, cpf: val})}
        />
        <Input
          label="Data da Visita"
          placeholder="00/00/0000"
          labelStyle={{color: '#202020'}}
          value={visitante.data}
          onChangeText={val => setVisitante({...visitante, data: val})}
        />
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <Input
            label="Horário Inicial"
            placeholder="00:00"
            labelStyle={{color: '#202020'}}
            containerStyle={{width: '50%'}}
            value={visitante.horaInicio}
            onChangeText={val => setVisitante({...visitante, horaInicio: val})}
          />
          <Input
            label="Horário Final"
            placeholder="00:00"
            labelStyle={{color: '#202020'}}
            containerStyle={{width: '50%'}}
            value={visitante.horaLimite}
            onChangeText={val => setVisitante({...visitante, horaLimite: val})}
          />
        </View>
        <Text
              style={{
                fontSize: 16,
                width: '80%',
                paddingHorizontal: '3%',
                fontWeight:'bold'
              }}>
              Tipo de Visita
            </Text>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <CheckBox
            title="Pessoal"
            textStyle={{fontWeight: '400'}}
            checked={selectedIndex === 0}
            onPress={() => {setIndex(0); visitante.tipo = 'Pessoal'}}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            title="Prestador de serviços"
            textStyle={{fontWeight: '400'}}
            checked={selectedIndex === 1}
            onPress={() => {setIndex(1); visitante.tipo = 'Prestador de Serviços'}}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>

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
            colors: ['#3CB4E7', '#0655A4'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          title="Salvar"
          onPress={() => {
            console.log(visitante);
          }}
        />
      </ScrollView>
    </View>
  );
}
