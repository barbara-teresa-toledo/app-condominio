import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/img/Logo.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}>
        <Text h3 h3Style={{paddingVertical: '5%', alignSelf:'center'}}>Controle e monitore de onde estiver!</Text>
        <Text style={styles.paragrafo}>Faça login para começar</Text>

        <Button
        onPress={() => navigation.navigate('Login')}
          buttonStyle={{
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
            marginVertical: '10%',
          }}
          titleStyle={{fontWeight: 'bold'}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#20B2AA', '#008080'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}>
          Acessar
        </Button>
      </Animatable.View>
    </View>
  );
}
