import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export default function Cadastrar() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    nome: null,
    sobrenome: null,
    telefone: null,
    email: null,
    cpf: null,
    rg: null,
    dataNasc: null,
  });

  return (
    <View style={styles.container}>
      <View delay={500} style={styles.containerHeader}>
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
            Cadastre-se
          </Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerForm}>
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          labelStyle={{color: '#202020'}}
          onChangeText={val => setForm({...form, nome: val})}
          value={form.nome}
        />
        <Input
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          labelStyle={{color: '#202020'}}
          onChangeText={val => setForm({...form, sobrenome: val})}
          value={form.sobrenome}
        />
        <Input
          label="Telefone"
          placeholder="(00) 00000-0000"
          labelStyle={{color: '#202020'}}
          onChangeText={val => setForm({...form, telefone: val})}
          value={form.telefone}
        />
        <Input
          label="E-mail"
          placeholder="email@email.com"
          labelStyle={{color: '#202020'}}
          onChangeText={val => setForm({...form, email: val})}
          value={form.email}
        />
        <Input
          label="CPF"
          placeholder="000.000.000-00"
          labelStyle={{color: '#202020'}}
          onChangeText={val => setForm({...form, cpf: val})}
          value={form.cpf}
        />
        <Input
          label="RG"
          placeholder="00.000.000-0"
          labelStyle={{color: '#202020'}}
          onChangeText={val => setForm({...form, rg: val})}
          value={form.rg}
        />
        <Input
          label="Data de Nascimento"
          placeholder="00/00/0000"
          labelStyle={{color: '#202020'}}
          onChangeText={val => setForm({...form, dataNasc: val})}
          value={form.dataNasc}
        />
        <Button
          onPress={() => {
            console.log(form);
            setForm({
              nome: null,
              sobrenome: null,
              telefone: null,
              email: null,
              cpf: null,
              rg: null,
              dataNasc: null,
            });
          }}
          buttonStyle={{
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
            marginVertical: '15%',
          }}
          titleStyle={{fontWeight: 'bold'}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#20B2AA', '#008080'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}>
          Cadastrar
        </Button>
      </ScrollView>
    </View>
  );
}
