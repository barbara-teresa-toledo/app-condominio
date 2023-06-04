import React, {useState, useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {Button, Text, Avatar} from '@rneui/themed';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import 'dayjs/locale/pt-br'
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Mensagens() {
  const navigation = useNavigation();
  let dados = [
    {
      _id: 1,
      text: 'Oi, tudo bem?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Ana Gabriela',
        unidade: '04 403',
        avatar: require('../../assets/img/perfil1.jpg'),
      },
    },
  ];
  
  const foto = require('../../assets/img/perfil1.jpg');
  const nome = 'Ana Gabriela';
  const unidade = '04 403';

  const [messages, setMessages] = useState([]);
  const dayjs = require('dayjs/locale/pt-br');

  function renderSend(props) {
    return (
      <Send {...props} label={'Enviar'} />
    );
}

  useEffect(() => {
    setMessages(dados);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
      console.log(messages)
    );
  }, []);

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
          <Avatar rounded source={foto} size={48} />
          <Text
            style={{
              color: '#fefefe',
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 20,
            }}>
            {nome} •{' '}
          </Text>
          <Text style={{color: '#fefefe'}}>{unidade} </Text>
        </LinearGradient>
      </View>

      <View style={styles.containerMain}>
        <GiftedChat
          messages={messages}
          placeholder='Digite sua mensagem...'
          textInputProps={{color: 'black'}}
          locale={dayjs}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderSend={renderSend}
        />
      </View>
    </View>
  );
}
