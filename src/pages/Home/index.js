import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Badge, Divider} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();
  const MensagensNovas = 6;

  return (
    <View style={styles.container}>
      <View delay={600} style={styles.containerHeader}>
        <LinearGradient colors={['#008080', '#20B2AA']}>
          <View style={{marginBottom: 60, marginTop: 5}}>
            <Animatable.Image
              animation="fadeInDown"
              source={require('../../assets/img/Logo.png')}
              style={{height: '100%'}}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerMain}>
        <View style={styles.containerButtonsPrincipal}>
          <Button
            onPress={() => navigation.navigate('MeuPerfil')}
            icon={{
              name: 'user-alt',
              type: 'font-awesome-5',
              size: 30,
              color: '#008080',
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
            Meu Perfil
          </Button>

          <Button
            onPress={() => navigation.navigate('Chat')}
            icon={{
              name: 'chatbubbles',
              type: 'ionicon',
              size: 30,
              color: '#008080',
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
            Chat
            <Badge
              badgeStyle={{backgroundColor: '#b10101'}}
              value={MensagensNovas}
              containerStyle={{position: 'absolute', top: 25, right: 65}}
            />
          </Button>

          <Button
            onPress={() => navigation.navigate('Encomendas')}
            icon={{
              name: 'archive',
              type: 'font-awesome-5',
              size: 30,
              color: '#008080',
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
            Encomendas
          </Button>

          <Button
            onPress={() => navigation.navigate('Reservas')}
            icon={{
              name: 'calendar-alt',
              type: 'font-awesome-5',
              size: 30,
              color: '#008080',
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
            Reservas
          </Button>
        </View>

        <Divider
          color={'#008080'}
          style={{marginVertical: 20, borderRadius: 10, marginHorizontal: 60}}
        />

        <View
          style={styles.containerButtonsSecundario}>
          <Button
            onPress={() => navigation.navigate('Visitas')}
            type="clear"
            icon={{
              name: 'address-card',
              type: 'font-awesome-5',
              size: 35,
              color: '#008080',
            }}
            iconPosition="top"
            iconContainerStyle={{
              backgroundColor: '#f0f0f0',
              padding: 20,
              borderRadius: 100,
            }}
            buttonStyle={{
              borderRadius: 10,
              width: 120,
              height: 130,
              alignSelf: 'center',
              marginVertical: '5%',
            }}
            titleStyle={{fontWeight: 'bold', paddingTop: 10, color: '#707070'}}>
            Visitas
          </Button>

          <Button
            onPress={() => navigation.navigate('Comunicados')}
            type="clear"
            icon={{
              name: 'bullhorn',
              type: 'font-awesome-5',
              size: 30,
              color: '#008080',
            }}
            iconPosition="top"
            iconContainerStyle={{
              backgroundColor: '#f0f0f0',
              padding: 20,
              borderRadius: 100,
            }}
            buttonStyle={{
              borderRadius: 10,
              width: 120,
              height: 130,
              alignSelf: 'center',
              marginVertical: '5%',
            }}
            titleStyle={{fontWeight: 'bold', paddingTop: 10, color: '#707070'}}>
            Avisos
          </Button>

          <Button
            onPress={() => navigation.navigate('Classificados')}
            type="clear"
            icon={{
              name: 'shopping-cart',
              type: 'font-awesome-5',
              size: 30,
              color: '#008080',
            }}
            iconPosition="top"
            iconContainerStyle={{
              backgroundColor: '#f0f0f0',
              padding: 20,
              borderRadius: 100,
            }}
            buttonStyle={{
              borderRadius: 10,
              width: 120,
              height: 130,
              alignSelf: 'center',
              marginVertical: '5%',
            }}
            titleStyle={{fontWeight: 'bold', paddingTop: 10, color: '#707070'}}>
            Classificados
          </Button>

          <Button
            onPress={() => navigation.navigate('AchadosEPerdidos')}
            type="clear"
            icon={{
              name: 'search',
              type: 'font-awesome',
              size: 30,
              color: '#008080',
            }}
            iconPosition="top"
            iconContainerStyle={{
              backgroundColor: '#f0f0f0',
              padding: 20,
              borderRadius: 100,
            }}
            buttonStyle={{
              borderRadius: 10,
              width: 120,
              height: 130,
              alignSelf: 'center',
              marginVertical: '5%',
            }}
            titleStyle={{fontWeight: 'bold', paddingTop: 10, color: '#707070'}}>
            Achados e Perdidos
          </Button>

          <Button
            onPress={() => navigation.navigate('NovoCadastro')}
            type="clear"
            icon={{
              name: 'add-to-photos',
              type: 'material-icon',
              size: 30,
              color: '#008080',
            }}
            iconPosition="top"
            iconContainerStyle={{
              backgroundColor: '#f0f0f0',
              padding: 20,
              borderRadius: 100,
            }}
            buttonStyle={{
              borderRadius: 10,
              width: 120,
              height: 130,
              alignSelf: 'center',
              marginVertical: '5%',
            }}
            titleStyle={{fontWeight: 'bold', paddingTop: 10, color: '#707070'}}>
            Novo Cadastro
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
