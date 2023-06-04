import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ReactNativeBiometrics from 'react-native-biometrics';

export default function Login() {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: null,
    senha: null,
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const rnBiometrics = new ReactNativeBiometrics();

  rnBiometrics
    .simplePrompt({promptMessage: 'appCondominio', cancelButtonText: 'Cancelar'})
    .then(resultObject => {
      const {success} = resultObject;

      if (success) {
        console.log('biometria reconhecida');
        navigation.navigate('Home');
      } else {
        console.log('biometria cancelada pelo usuário');
      }
    })
    .catch(() => {
      console.log('autenticação biometrica falhou');
    });

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}>
        <View style={{marginVertical: 10}} >
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/img/Logo.png')}
          style={{height: '100%'}}
          resizeMode="contain"
        />
        </View>
        
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.formLogin}>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          labelStyle={{color: '#202020'}}
          onChangeText={val => setForm({...form, email: val})}
        />

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          labelStyle={{color: '#202020'}}
          secureTextEntry={true}
          onChangeText={val => setForm({...form, senha: val})}
        />

        <Button
          onPress={() => {
            console.log(form);
            navigation.navigate('Home');
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
            colors: ['#3CB4E7', '#0655A4'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}>
          Entrar
        </Button>

        <Button
          onPress={toggleModal}
          buttonStyle={{
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
            marginBottom: '5%',
          }}
          titleStyle={{color: '#909090', fontWeight: 'normal'}}
          title="Esqueci minha senha"
          type="clear"
        />
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fefefe',
              minHeight: 280,
              maxHeight: '35%',
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
              label="E-mail"
              placeholder="Digite seu e-mail"
              labelStyle={{color: '#202020'}}
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
              title="Enviar e-mail de recuperação"
              onPress={() => {
                console.log('e-mail enviado');
              }}
            />
          </View>
        </Modal>

        <Button
          onPress={() => navigation.navigate('Cadastrar')}
          buttonStyle={{
            width: '60%',
            alignSelf: 'center',
          }}
          titleStyle={{color: '#0655A4', fontWeight: 'normal'}}
          title="Cadastre-se"
          type="clear"
        />
      </Animatable.View>
    </View>
  );
}
