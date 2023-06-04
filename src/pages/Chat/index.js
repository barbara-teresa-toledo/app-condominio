import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Button, Input, Text, ListItem, Avatar, Badge} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Chat() {
  const navigation = useNavigation();
  let dados = [
    {
      id: '01',
      descricao: 'Mensagem de texto',
      foto: require('../../assets/img/perfil1.jpg'),
      contato: 'Ana Gabriela',
      unidade: '04 403',
      msgsNaoLidas: 5,
    },
    {
      id: '02',
      descricao: 'Mensagem de texto',
      foto: require('../../assets/img/perfil2.jpg'),
      contato: 'Caros Eduardo',
      unidade: '03 502',
      msgsNaoLidas: 87,
    },
    {
      id: '03',
      descricao: 'Mensagem de texto',
      foto: require('../../assets/img/perfil3.jpg'),
      contato: 'Gabrielle de Souza',
      unidade: '08 303',
      msgsNaoLidas: 0,
    },
    {
      id: '04',
      descricao: 'Mensagem de texto',
      foto: require('../../assets/img/perfil4.jpg'),
      contato: 'Ana Gabriela',
      unidade: '04 403',
      msgsNaoLidas: 3,
    },
    {
      id: '05',
      descricao: 'Mensagem de texto',
      foto: require('../../assets/img/perfil5.jpg'),
      contato: 'Rafaela Costa',
      unidade: '01 202',
      msgsNaoLidas: 0,
    },
    {
      id: '06',
      descricao: 'Mensagem de texto',
      foto: require('../../assets/img/perfil6.jpg'),
      contato: 'João Alves',
      unidade: '07 404',
      msgsNaoLidas: 8,
    },
    {
      id: '07',
      descricao: 'Mensagem de texto',
      foto: require('../../assets/img/perfil7.jpg'),
      contato: 'Maria Gabriela',
      unidade: '09 204',
      msgsNaoLidas: 0,
    },
  ];

  const [contatos, setContatos] = useState(dados);
  const [filterContatos, setFilterContatos] = useState(dados);
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
            Chat
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
            let contatosCopy = [...contatos];
            setFilterContatos(
              contatosCopy.filter(
                val =>
                  val.contato.indexOf(text) != -1 ||
                  val.unidade.indexOf(text) != -1,
              ),
            );
          }}
        />
        <FlatList
          data={filterContatos}
          renderItem={({item}) => (
            <ListItem
              bottomDivider
              onPress={() => {
                console.log(item.id, item.contato);
                navigation.navigate('Mensagens');
              }}>
              <Avatar rounded source={item.foto} />
              <ListItem.Content>
                <ListItem.Title>
                  {item.contato} •{' '}
                  <ListItem.Subtitle>{item.unidade}</ListItem.Subtitle>
                </ListItem.Title>
                <ListItem.Subtitle style={{color: 'gray'}}>
                  {item.descricao}
                </ListItem.Subtitle>
              </ListItem.Content>
              {item.msgsNaoLidas ? (
                <Badge status="primary" value={item.msgsNaoLidas} />
              ) : (
                <></>
              )}
            </ListItem>
          )}
        />
      </View>
    </View>
  );
}
