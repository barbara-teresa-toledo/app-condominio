import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Button, Text, Input, Dialog, ListItem} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function NovoAchado() {
  const navigation = useNavigation();
  const [achado, setAchado] = useState(
    {
      titulo: '',
      foto: '',
      data: '',
      local: '',
    },
  );

  const [foto, setFoto] = useState('');

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const [visible, setVisible] = useState(false);

  const abrirGaleria = async () => {
    setVisible(!visible);
    const options = {
      mediaType: 'photo',
    };

    const response = await launchImageLibrary(options);

    if (response?.assets) {
      setFoto(response.assets[0].uri);
      console.log(response.assets[0].uri);
      return;
    }
  };

  const abrirCamera = async () => {
    setVisible(!visible);
    const options = {
      mediaType: 'photo',
      saveToPhotos: false,
      cameraType: 'back',
      quality: 1,
    };

    const response = await launchCamera(options);

    if (response?.assets) {
      setFoto(response.assets[0].uri);
      console.log(response.assets[0].uri);
      return;
    }
  };

  

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
            Novo Achado
          </Text>
        </LinearGradient>
      </View>

      <ScrollView style={styles.containerMain}>
        <Input
          label="Título"
          placeholder="O que você achou?"
          labelStyle={{color: '#202020'}}
          value={achado.titulo}
          onChangeText={val => setAchado({...achado, titulo: val})}
        />
        <Input
          label="Local"
          placeholder="Onde você achou?"
          labelStyle={{color: '#202020'}}
          value={achado.local}
          onChangeText={val => setAchado({...achado, local: val})}
        />
        <Input
          label="Data"
          placeholder="Quando você achou? Ex.: 00/00/00"
          labelStyle={{color: '#202020'}}
          value={achado.data}
          onChangeText={val => setAchado({...achado, data: val})}
        />

        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <Button
            onPress={() => toggleDialog()}
            icon={{name: 'add-photo-alternate', color: 'white', size: 60}}
            color="#0655A4"
            buttonStyle={{
              alignSelf: 'flex-end',
              borderRadius: 10,
              marginHorizontal: '2%',
              height: 100,
              width: 100,
              backgroundColor: '#ccc'
            }}
          />

          {foto ? (
            <Image
              source={{uri: foto}}
              style={{
                borderRadius: 10,
                aspectRatio: 1,
                height: 100,
                marginHorizontal: '3%',
              }}
              resizeMode="cover"
            />
          ) : (
            <></>
          )}
        </View>

        <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
          <Text>Escolha da onde você quer importar a foto.</Text>
          <Dialog.Actions>
            <Dialog.Button title="Galeria" onPress={() => abrirGaleria()} />
            <Dialog.Button title="Câmera" onPress={() => abrirCamera()} />
          </Dialog.Actions>
        </Dialog>

        <Button
          buttonStyle={{
            borderRadius: 10,
            width: '60%',
            alignSelf: 'center',
            marginVertical: '5%',
          }}
          titleStyle={{fontWeight: 'bold'}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#3CB4E7', '#0655A4'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          title="Publicar"
          onPress={() => {
            console.log(achado);
          }}
        />
      </ScrollView>
    </View>
  );
}
