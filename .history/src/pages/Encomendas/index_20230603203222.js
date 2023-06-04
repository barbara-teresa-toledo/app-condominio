import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Button, ListItem, Icon, Text, FAB} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Encomendas() {
  const navigation = useNavigation();
  
  const [encomendas, setEncomendas] = useState([
    {
      id: '01',
      destinatario: 'Ana Carolina',
      unidade: '01 203',
      codigo: '654146546',
      data: '16/08',
    },
    {
      id: '02',
      destinatario: 'Ana Carolina',
      unidade: '01 203',
      codigo: '684168464',
      data: '20/08',
    },
  ]);

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
            Encomendas
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.containerMain}>
        <FlatList
          data={encomendas}
          renderItem={({item}) => (
            <ListItem bottomDivider>
              <Icon name="archive" type="font-awesome-5" color="grey" />
              <ListItem.Content>
                <ListItem.Title>
                Encomenda para {item.destinatario} •{' '}{item.unidade}                 
                </ListItem.Title>
                <ListItem.Subtitle>
                  Código de rastreio: {item.codigo}
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                  Data de recebimento: {item.data}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
        />

        <FAB
          onPress={() => navigation.navigate('ReceberEncomenda')}
          icon={{type: 'ionicon', name: 'scan', color: 'white'}}
          color="#0655A4"
          placement="right"
        />
      </View>
    </View>
  );
}
