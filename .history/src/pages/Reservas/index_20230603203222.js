import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Button, Input, Text, FAB, ListItem, Icon, Card} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Reservas() {
  const navigation = useNavigation();
  let dados = [
    {
      id: '01',
      local: 'Churrasqueira 01',
      status: 'Aprovada',
      data: '04/06/2023',
      dia: 'domingo',
      horaInicio: '08:00',
      horaLimite: '17:00',
    },
    {
      id: '02',
      local: 'Quiosque 03',
      status: 'Aprovada',
      data: '06/06/2023',
      dia: 'terça-feira',
      horaInicio: '14:00',
      horaLimite: '22:00',
    },
  ];

  const [reservas, setReservas] = useState(dados);
  const [filterReservas, setFilterReservas] = useState(dados);
  const [search, setSearch] = useState('');
 
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
            Reservas
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.containerMain}>
        <Input
          placeholder="Pesquisar"
          leftIcon={{type: 'fontisto', name: 'search', color: '#0655A4'}}
          value={search}
          onChangeText={text => {
            setSearch(text);
            let reservasCopy = [...reservas];
            setFilterReservas(
              reservasCopy.filter(val => (val.local.indexOf(text) != -1 || val.data.indexOf(text) != -1)),
            );
          }}
        />

        <FlatList
          data={filterReservas}
          renderItem={({item}) => (
            <Card
              containerStyle={{borderRadius: 10}}
              onLongPress={() => console.log(item)}>
              <Card.Title>{item.local}</Card.Title>

              <Text style={{textAlign: 'center'}}>
                {item.data}, {item.dia}
              </Text>
              <Text style={{textAlign: 'center'}}>
                {item.horaInicio} - {item.horaLimite}
              </Text>
              <Card.Divider style={{marginVertical: 10}} />
              <Button
                onPress={() => console.log('Cancelar reserva: ' + item.id)}
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: '10%',
                  marginRight: '10%',
                  marginBottom: 0,
                }}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ['#3CB4E7', '#0655A4'],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
                title="Cancelar reserva"
                iconLeft
                icon={
                  <Icon
                    name="calendar-times"
                    type="font-awesome-5"
                    color="#ffffff"
                    iconStyle={{marginRight: 10}}
                  />
                }
              />
            </Card>
          )}
        />

        <FAB
          onPress={() => navigation.navigate('NovaReserva')}
          icon={{name: 'add', color: 'white'}}
          color="#0655A4"
          placement="right"
        />
      </View>
    </View>
  );
}
