import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Button, Input, Text, Card, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Classificados() {
  const navigation = useNavigation();
  let dados = [
    {
      id: '01',
      titulo: 'Bolos de Festa',
      preco: '30',
      descricao: 'Descrição do produto',
      foto: require('../../assets/img/bolo.jpg'),
      contato: 'Ana Gabriela',
      unidade: '04 403',
    },
    {
      id: '02',
      titulo: 'Livros Diversos',
      preco: '10 cada',
      descricao: 'Descrição do produto',
      foto: require('../../assets/img/livros.jpg'),
      contato: 'Caros Eduardo',
      unidade: '03 502',
    },
    {
      id: '03',
      titulo: 'Notebook Usado',
      preco: '800',
      descricao: 'Descrição do produto',
      foto: require('../../assets/img/notebook.jpg'),
      contato: 'João Alves',
      unidade: '08 303',
    },
    {
      id: '04',
      titulo: 'Pizzas Caseiras',
      preco: '25',
      descricao: 'Descrição do produto',
      foto: require('../../assets/img/pizza.jpg'),
      contato: 'Ana Gabriela',
      unidade: '04 403',
    },
    {
      id: '05',
      titulo: 'Relógio Antigo',
      preco: '50',
      descricao: 'Descrição do produto',
      foto: require('../../assets/img/relogio.jpg'),
      contato: 'Rafaela Costa',
      unidade: '01 202',
    },
    {
      id: '06',
      titulo: 'Sapato de Salto',
      preco: '90',
      descricao: 'Descrição do produto',
      foto: require('../../assets/img/sapato.jpg'),
      contato: 'Gabrielle de Souza',
      unidade: '07 404',
    },
  ];

  const [classificados, setClassificados] = useState(dados);
  const [filterClassificados, setFilterClassificados] = useState(dados);
  const [search, setSearch] = useState('');

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
            Classificados
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.containerMain}>
      <Input
        placeholder="Pesquisar"
        leftIcon={{type: 'fontisto', name: 'search', color: '#008080'}}
        value={search}
        onChangeText={text => {
          setSearch(text);
          let classificadosCopy = [...classificados];
          setFilterClassificados(
            classificadosCopy.filter(val => val.titulo.indexOf(text) != -1),
          );
        }}
      />
        <FlatList
          data={filterClassificados}
          renderItem={({item}) => (
            <Card containerStyle={{borderRadius: 10}}>
              <Card.Title style={{fontSize: 20}}>{item.titulo}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{padding: 0, borderRadius: 10}}
                source={item.foto}
              />
              <Text
                style={{marginVertical: 10, fontWeight: 'bold', fontSize: 18}}>
                R$ {item.preco}
              </Text>
              <Text style={{marginBottom: 10}}>{item.descricao}</Text>
              <Text style={{marginBottom: 10, fontSize: 12, color: 'gray'}}>
                {item.contato}, {item.unidade}
              </Text>
              <Button
                onPress={() => console.log('Enviar mensagem: ' + item.id)}
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: '10%',
                  marginRight: '10%',
                  marginBottom: 0,
                }}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ['#20B2AA', '#008080'],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
                title="Enviar mensagem"
                iconRight
                icon={
                  <Icon
                    name="send"
                    color="#ffffff"
                    iconStyle={{marginLeft: 10}}
                  />
                }
              />
            </Card>
          )}
        />
      </View>
    </View>
  );
}
