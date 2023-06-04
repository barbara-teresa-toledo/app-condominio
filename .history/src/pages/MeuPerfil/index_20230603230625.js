import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Button, Input, Text, Dialog, Switch} from '@rneui/themed';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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
    confirmNovaSenha: null,
  });

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [foto, setFoto] = useState('');

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const [visible, setVisible] = useState(false);

  const abrirGaleria = async () => {
    setVisible(!visible);
    const options = {
      mediaType: 'photo',
    };

    const response = await launchImageLibrary(options);

    if (response?.assets) {
      setFoto(response.assets[0].uri);
      console.log(response.assets[0].uri);
      return;
    }
  };

  const abrirCamera = async () => {
    setVisible(!visible);
    const options = {
      mediaType: 'photo',
      saveToPhotos: false,
      cameraType: 'back',
      quality: 1,
    };

    const response = await launchCamera(options);

    if (response?.assets) {
      setFoto(response.assets[0].uri);
      console.log(response.assets[0].uri);
      return;
    }
  };

  const urlFoto = require('../../assets/img/foto.png');

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
            Meu Perfil
          </Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerMain}>
        <View style={styles.containerCampos}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            {foto ? (
              <View style={{width: 300, height: 300}}>
                <Image
                  source={{uri: foto}}
                  style={{
                    borderRadius: 100,
                    aspectRatio: 1,
                    height: 150,
                    marginHorizontal: '3%',
                    alignSelf: 'center',
                  }}
                  resizeMode="cover"
                />
              </View>
            ) : (
              <View style={{width: 300, height: 300}}>
                <Image
                  source={urlFoto}
                  style={{
                    borderRadius: 100,
                    aspectRatio: 1,
                    height: 150,
                    marginHorizontal: '3%',
                    alignSelf: 'center',
                  }}
                  resizeMode="cover"
                />
              </View>
            )}

            <Button
              onPress={() => toggleDialog()}
              icon={{name: 'edit', color: 'white', size: 30}}
              color="#008080"
              buttonStyle={{
                alignSelf: 'flex-end',
                borderRadius: 10,
                marginHorizontal: '2%',
                height: 60,
                width: 60,
                backgroundColor: '#ccc',
              }}
            />
          </View>

          <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
            <Text>Escolha da onde você quer importar a foto.</Text>
            <Dialog.Actions>
              <Dialog.Button title="Galeria" onPress={() => abrirGaleria()} />
              <Dialog.Button title="Câmera" onPress={() => abrirCamera()} />
            </Dialog.Actions>
          </Dialog>

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
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: '5%',
              paddingTop: '3%',
            }}>
            <Text
              style={{
                fontSize: 16,
                width: '80%',
                paddingHorizontal: '3%',
                fontWeight: 'bold',
              }}>
              Login por digital
            </Text>
            <Switch
              trackColor={{false: '#cccccc', true: '#20B2AA'}}
              thumbColor={checked ? '#008080' : '#909090'}
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
                colors: ['#20B2AA', '#008080'],
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
                  onChangeText={val =>
                    setSenha({...senha, confirmNovaSenha: val})
                  }
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
                    colors: ['#20B2AA', '#008080'],
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
                colors: ['#20B2AA', '#008080'],
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
              color="gray">
              Sair do app
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
