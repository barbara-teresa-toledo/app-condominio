import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Button, Input, Text, Card, Icon, FAB} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function AchadosEPerdidos() {
  const navigation = useNavigation();
  let dados = [
    {
      id: '01',
      titulo: 'Boné Preto',
      foto: require('../../assets/img/bone.jpg'),
      data: '24/05/2023',
      local: 'Playground',
    },
    {
      id: '02',
      titulo: 'Óculos de Grau',
      foto: require('../../assets/img/oculos.jpg'),
      data: '20/05/2023',
      local: 'Piscina',
    },
    {
      id: '03',
      titulo: 'Chave',
      foto: require('../../assets/img/chave.jpg'),
      data: '20/05/2023',
      local: 'Salão de Festas',
    },
    {
      id: '04',
      titulo: 'Crachá da Empresa X',
      foto: require('../../assets/img/cracha.jpg'),
      data: '19/05/2023',
      local: 'Rua A',
    },
    {
      id: '05',
      titulo: 'Cachecol Vermelho',
      foto: require('../../assets/img/cachecol.jpg'),
      data: '18/05/2023',
      local: 'Próximo à portaria',
    },
  ];

  const [achados, setAchados] = useState(dados);
  const [filterAchados, setFilterAchados] = useState(dados);
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
            Achados e Perdidos
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
            let achadosCopy = [...achados];
            setFilterAchados(
              achadosCopy.filter(val => val.titulo.indexOf(text) != -1 || val.local.indexOf(text) != -1),
            );
          }}
        />
        <FlatList
          data={filterAchados}
          renderItem={({item}) => (
            <Card containerStyle={{borderRadius: 10}}>
              <Card.Title style={{fontSize: 20}}>{item.titulo}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{padding: 0, borderRadius: 10}}
                source={item.foto}
              />
              <Text style={{marginBottom: 10}}>{item.local}</Text>
              <Text style={{marginBottom: 10}}>{item.data}</Text>
            </Card>
          )}
        />

        <FAB
          onPress={() => navigation.navigate('NovoAchado')}
          icon={{name: 'add', color: 'white'}}
          color="#008080"
          placement="right"
        />
      </View>
    </View>
  );
}
