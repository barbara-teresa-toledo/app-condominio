import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Input, Text, Image, Switch} from '@rneui/themed';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function MeuPerfil() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const [form, setForm] = useState({
    nome: 'Sofia Costa',
    rg: '18.783.498-5',
    cpf: '423.578.838-70',
    dataNasc: '13/09/1996',
    telefone: '(12) 99150-5205',
    email: 'sofia.costa@email.com',
    unidade: '01 101',
    veiculo: 'Carro',
    placa: 'INE4G64',
    modelo: 'Gol Cinza',
  });

  const [senha, setSenha] = useState({
    senha: 123123,
    novaSenha: null,
    confirmNovaSenha: null
  });

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const foto = require('../../assets/img/foto.png');

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
            Meu Perfil
          </Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerMain}>
        <View style={styles.containerCampos}>
          <Image
            source={foto}
            containerStyle={{
              borderRadius: 100,
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            childrenContainerStyle={{width: 150, height: 150}}
          />
          <Input
            label="Nome"
            value={form.nome}
            labelStyle={{color: '#202020'}}
            onChangeText={val => setForm({...form, nome: val})}
          />
          <Input
            label="Telefone"
            value={form.telefone}
            labelStyle={{color: '#202020'}}
            onChangeText={val => setForm({...form, telefone: val})}
          />
          <Input
            label="E-mail"
            value={form.email}
            labelStyle={{color: '#202020'}}
            onChangeText={val => setForm({...form, email: val})}
          />
          <Input
            label="CPF"
            value={form.cpf}
            labelStyle={{color: '#202020'}}
            onChangeText={val => setForm({...form, cpf: val})}
          />
          <Input
            label="RG"
            value={form.rg}
            labelStyle={{color: '#202020'}}
            onChangeText={val => setForm({...form, rg: val})}
          />
          <Input
            label="Data de Nascimento"
            value={form.dataNasc}
            labelStyle={{color: '#202020'}}
            onChangeText={val => setForm({...form, dataNasc: val})}
          />
          <Input
            label="Unidade"
            value={form.unidade}
            labelStyle={{color: '#202020'}}
            onChangeText={val => setForm({...form, unidade: val})}
          />
          <Input
            label="Veículos"
            value={form.veiculo + ': ' + form.modelo + ', placa ' + form.placa}
            labelStyle={{color: '#202020'}}
            onChangeText={val => setForm({...form, veiculo: val})}
          />
          <View style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '5%', paddingTop: '3%'}}>
            <Text
              style={{
                fontSize: 16,
                width: '80%',
                paddingHorizontal: '3%',
                fontWeight:'bold'
              }}>
              Login por digital
            </Text>
            <Switch
              trackColor={{false: '#cccccc', true: '#3CB4E7'}}
              thumbColor={checked ? '#0655A4' : '#909090'}
              value={checked}
              onValueChange={toggleSwitch}
            />
          </View>

          <View style={{width: '100%'}}>
            <Button
              onPress={toggleModal}
              buttonStyle={{
                borderRadius: 10,
                width: '60%',
                alignSelf: 'center',
                marginVertical: '8%',
              }}
              titleStyle={{fontWeight: 'bold'}}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#3CB4E7', '#0655A4'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}>
              Alterar senha
            </Button>

            <Modal isVisible={isModalVisible}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#fefefe',
                  minHeight: 420,
                  maxHeight: '55%',
                  paddingVertical: '5%',
                  paddingHorizontal: '5%',
                  borderRadius: 10,
                }}>
                <Button
                  type="clear"
                  onPress={toggleModal}
                  icon={{type: 'evilicon', name: 'close'}}
                  buttonStyle={{
                    alignSelf: 'flex-end',
                  }}
                />

                <Input
                  label="Senha atual"
                  placeholder="Digite sua senha atual"
                  labelStyle={{color: '#202020'}}
                  secureTextEntry={true}
                  onChangeText={val => setSenha({...senha, senha: val})}
                />
                <Input
                  label="Nova senha"
                  placeholder="Digite sua nova senha"
                  labelStyle={{color: '#202020'}}
                  secureTextEntry={true}
                  onChangeText={val => setSenha({...senha, novaSenha: val})}
                />
                <Input
                  label="Confirmar nova senha"
                  placeholder="Confirme sua nova senha"
                  labelStyle={{color: '#202020'}}
                  secureTextEntry={true}
                  onChangeText={val => setSenha({...senha, confirmNovaSenha: val})}
                />

                <Button
                  buttonStyle={{
                    borderRadius: 10,
                    width: '60%',
                    alignSelf: 'center',
                    marginTop: '5%',
                  }}
                  titleStyle={{fontWeight: 'bold'}}
                  ViewComponent={LinearGradient}
                  linearGradientProps={{
                    colors: ['#3CB4E7', '#0655A4'],
                    start: {x: 0, y: 0.5},
                    end: {x: 1, y: 0.5},
                  }}
                  title="Salvar alterações"
                  onPress={() => {
                    console.log(senha);
                  }}
                />
              </View>
            </Modal>

            <Button
              onPress={() => {
                console.log(form);
              }}
              buttonStyle={{
                borderRadius: 10,
                width: '60%',
                alignSelf: 'center',
                marginBottom: '12%',
                paddingVertical: '3%',
              }}
              titleStyle={{fontWeight: 'bold'}}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#3CB4E7', '#0655A4'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}>
              Salvar alterações
            </Button>

            <Button
              onPress={() => {
                console.log('saiu do app');
                navigation.navigate('Login');
              }}
              icon={{name: 'logout', color: 'white'}}
              iconRight
              buttonStyle={{
                borderRadius: 10,
                width: '60%',
                alignSelf: 'center',
                marginBottom: '10%',
              }}
              titleStyle={{fontWeight: 'bold'}}
              color='gray'
              >
             Sair do app
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
