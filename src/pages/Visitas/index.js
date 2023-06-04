import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Button, ListItem, Icon, Text, FAB} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Visitas() {
  const navigation = useNavigation();
  const [visitas, setVisitas] = useState([
    {
      id: '01',
      nome: 'Ana Beatriz',
      tipo: 'Pessoal',
      data: '20/08',
      dia: 'domingo',
      horaInicio: '08:00',
      horaLimite: '17:00',
    },
    {
      id: '02',
      nome: 'João Victor',
      tipo: 'Prestador de Serviços',
      data: '22/08',
      dia: 'terça-feira',
      horaInicio: '09:00',
      horaLimite: '22:00',
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
            Visitas
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.containerMain}>
        <FlatList
          data={visitas}
          renderItem={({item}) => (
            <ListItem.Swipeable
              bottomDivider
              leftContent={reset => (
                <Button
                  title="Editar"
                  onPress={() => reset()}
                  icon={{name: 'edit', color: 'white'}}
                  buttonStyle={{minHeight: '100%', backgroundColor: '#008080'}}
                />
              )}
              rightContent={reset => (
                <Button
                  title="Excluir"
                  onPress={() => reset()}
                  icon={{name: 'delete', color: 'white'}}
                  buttonStyle={{minHeight: '100%', backgroundColor: '#B10101'}}
                />
              )}>
                <Icon name="address-book" type="font-awesome-5" color="grey" />
              <ListItem.Content>
                <ListItem.Title>
                  {item.nome} •{' '}
                  <ListItem.Subtitle>{item.tipo}</ListItem.Subtitle>
                </ListItem.Title>
                <ListItem.Subtitle>
                  {item.data}, {item.dia}, {item.horaInicio} - {item.horaLimite}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem.Swipeable>
          )}
        />

        <FAB
          onPress={() => navigation.navigate('NovaVisita')}
          icon={{name: 'add', color: 'white'}}
          color="#008080"
          placement="right"
        />

      </View>
    </View>
  );
}
