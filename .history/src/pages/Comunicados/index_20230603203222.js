import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Button, Input, Text, CheckBox, Card} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Comunicados() {
  const navigation = useNavigation();
  let dados = [
    {
      id: '01',
      titulo: 'Uso Responsável da Água no Nosso Condomínio',
      texto:
        'Como síndico(a), venho ressaltar a importância do uso consciente da água em nosso condomínio. É fundamental adotarmos práticas simples, como reparar vazamentos, tomar banhos mais curtos, fechar as torneiras corretamente, utilizar a máquina de lavar roupa e louça de forma consciente, regar as plantas nos horários adequados e educar nossos filhos sobre a importância da economia de água.\n  Conto com a colaboração de todos(as) para garantirmos um uso responsável desse recurso tão valioso e preservarmos o meio ambiente.',
      autor: 'José Carlos',
      unidade: '04 303',
      data: '16/08/2023',
      hora: '11:36',
      checked: false,
    },
    {
      id: '02',
      titulo: 'Horário Permitido para Barulho e Obras',
      texto:
        'Com o intuito de promover a harmonia e o bem-estar de todos(as) os(as) moradores(as), é importante reforçar o horário permitido para barulho e obras em nosso condomínio. Solicito que todos(as) estejam cientes e respeitem as seguintes restrições:\n  Durante a semana, de segunda a sexta-feira, o horário permitido para a realização de obras e para a execução de atividades que possam gerar barulho é das 8h às 22h. Pedimos que sejam tomadas medidas para evitar ruídos excessivos após esse período, respeitando o direito ao descanso dos moradores.',
      autor: 'José Carlos',
      unidade: '04 303',
      data: '15/08/2023',
      hora: '19:42',
      checked: false,
    },
    {
      id: '03',
      titulo: 'Segurança ao Andar a Pé pelo Condomínio',
      texto:
        'Gostaria de chamar a atenção de todos(as) para a importância de garantir a segurança ao andar a pé pelo condomínio. Como síndico(a), é meu dever zelar pelo bem-estar de todos(as) e garantir um ambiente seguro para nossos moradores. Solicito que cada um(a) esteja atento(a) às seguintes medidas para mantermos a segurança em nosso condomínio:\n  Utilize os acessos principais: Utilize sempre os acessos e portões principais ao entrar ou sair do condomínio, evitando atalhos ou áreas menos movimentadas. Dessa forma, poderemos controlar melhor o fluxo de pessoas e identificar qualquer atividade suspeita.\n  Esteja atento(a) ao seu entorno: Ao caminhar pelo condomínio, mantenha-se atento(a) ao seu entorno e observe se há alguma pessoa ou veículo desconhecido ou suspeito nas proximidades. Em caso de qualquer situação estranha, não hesite em entrar em contato com a segurança do condomínio ou com as autoridades competentes.\n  Peço a colaboração de todos(as) para que sigam essas orientações e contribuam para a segurança coletiva de nosso condomínio. Juntos, podemos garantir um ambiente seguro e tranquilo para todos(as) os(as) moradores(as).',
      autor: 'José Carlos',
      unidade: '04 303',
      data: '10/08/2023',
      hora: '09:31',
      checked: false,
    },
  ];

  const [comunicados, setComunicados] = useState(dados);
  const [filterComunicados, setFilterComunicados] = useState(dados);
  const toggleCheckbox = (val, index) => {
    let comunicadosCopy = [...filterComunicados];
    comunicadosCopy[index] = {...val, checked: !val.checked};
    setFilterComunicados(comunicadosCopy);
  };
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
            Comunicados
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
            let comunicadosCopy = [...comunicados];
            setFilterComunicados(
              comunicadosCopy.filter(val => (val.titulo.indexOf(text) != -1 || val.autor.indexOf(text) != -1 || val.unidade.indexOf(text) != -1)),
            );
          }}
        />

        <FlatList
          data={filterComunicados}
          renderItem={({item, index}) => (
            <Card containerStyle={{borderRadius: 10}}>
              <Card.Title style={{fontSize: 20}}>{item.titulo}</Card.Title>
              <Card.Divider />
              <Text style={{marginBottom: 10}}>{item.texto}</Text>
              <Text style={{marginBottom: 10, fontSize: 12, color: 'gray'}}>
                Postado por {item.autor} • {item.unidade}, {item.data} -{' '}
                {item.hora}
              </Text>
              <CheckBox
                checked={item.checked}
                checkedIcon="heart"
                uncheckedIcon="heart-o"
                checkedColor="#0655A4"
                right="true"
                onPress={() => toggleCheckbox(item, index)}
              />
            </Card>
          )}
        />

        
      </View>
    </View>
  );
}
