import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Text, ButtonGroup, Card} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

export default function Reservas() {
  const navigation = useNavigation();

  const regras = [
    'Lorem ipsum dolor sit amet Porttitor eget dolor morbi non arcurisus quis.\n',
    'Morbi quis commodo odio aenean. Odio morbi quis commodo odio aenean sed adipiscing diam donec Et magnis dis parturient montes nascetur ridiculus.\n',
    'Commodo sed egestas egestas fringilla. Ut diam quam nulla porttitor massa id Volutpat blandit aliquam etiam erat. Consequat interdum varius sit amet mattis vulputate enim Volutpat blandit aliquam etiam erat. Consequat interdum varius sit amet mattis vulputate enim',
  ];

  const locais = [
    'Quiosque A',
    'Quiosque B',
    'Salão',
    'Churrasqueira 01',
    'Churrasqueira 02',
  ];

  const [form, setForm] = useState({
    data: null,
    local: null,
  });

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
            Nova Reserva
          </Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerMain}>
        <Card containerStyle={{borderRadius: 10}}>
          <Card.Title>Selecione a data desejada</Card.Title>
          <Card.Divider />
          <Calendar
            onDayPress={day => {
              setForm({...form, data: day.dateString});
            }}
            markedDates={{
              [form.data]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            style={{
              height: 300,
              width: 350,
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />
        </Card>

        <Card containerStyle={{borderRadius: 10}}>
          <Card.Title>Selecione o local desejado</Card.Title>
          <Card.Divider />
          <ButtonGroup
            buttons={locais}
            selectedIndex={form.local}
            vertical
            onPress={value => {
              setForm({...form, local: value});
            }}
            containerStyle={{borderRadius: 10}}
            buttonContainerStyle={{borderRadius: 10, marginVertical: 10}}
            buttonStyle={{borderRadius: 10}}
          />
        </Card>

        <Card containerStyle={{borderRadius: 10}}>
          <Card.Title>Regras de utilização</Card.Title>
          <Card.Divider />
          <Text>{regras}</Text>
        </Card>

        <Button
          onPress={() => {
            console.log(form);
          }}
          buttonStyle={{
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
            marginVertical: '10%',
          }}
          titleStyle={{fontWeight: 'bold'}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#3CB4E7', '#0655A4'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}>
          Confirmar reserva
        </Button>
      </ScrollView>
    </View>
  );
}
