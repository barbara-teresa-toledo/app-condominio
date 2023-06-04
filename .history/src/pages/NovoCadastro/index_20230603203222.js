import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function NovoVeiculo() {
  const navigation = useNavigation();

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
            Novo Cadastro
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.containerMain}>
      <Button
            onPress={() => navigation.navigate('NovoDependente')}
            icon={{
              name: 'user-friends',
              type: 'font-awesome-5',
              size: 30,
              color: '#0655A4',
            }}
            iconPosition="top"
            iconContainerStyle={{
              backgroundColor: '#f0f0f0',
              padding: 20,
              borderRadius: 100,
            }}
            buttonStyle={{
              borderRadius: 10,
              width: 190,
              height: 130,
              alignSelf: 'center',
              marginVertical: '5%',
              backgroundColor: '#fefefe'
            }}
            titleStyle={{fontWeight: 'bold', paddingTop: 10, color: '#707070'}}>
            Dependente
          </Button>

          <Button
            onPress={() => navigation.navigate('NovoVeiculo')}
            icon={{
              name: 'car',
              type: 'font-awesome-5',
              size: 30,
              color: '#0655A4',
            }}
            iconPosition="top"
            iconContainerStyle={{
              backgroundColor: '#f0f0f0',
              padding: 20,
              borderRadius: 100,
            }}
            buttonStyle={{
              borderRadius: 10,
              width: 190,
              height: 130,
              alignSelf: 'center',
              marginVertical: '5%',
              backgroundColor: '#fefefe'
            }}
            titleStyle={{fontWeight: 'bold', paddingTop: 10, color: '#707070'}}>
            Veículo
          </Button>
      </View>
    </View>
  );
}
