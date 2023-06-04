import React, {useState, useRef} from 'react';
import {View, Linking} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export default function ReceberEncomenda() {
  const navigation = useNavigation();
  const qrcodeRef = useRef(null);
  const [link, setLink] = useState('');
  const receberEncomenda = () => {
    Linking.openURL(link).catch(() => {
      console.log('Erro ao seguir o link');
    });

    qrcodeRef.current.reactivate()
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
            Receber Encomenda
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.containerMain}>
        <QRCodeScanner
          ref={qrcodeRef}
          onRead={({data}) => setLink(data)}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <View style={{height: 200}}>
              <Text style={{marginVertical: 50}}>
                Escaneie o QR Code para receber sua encomenda
              </Text>
            </View>
          }
          bottomContent={
            <View style={{width: '100%', height: '100%'}}>
              <Text style={{marginTop: 15}}>{link}</Text>
              <Button
                onPress={() => receberEncomenda()}
                buttonStyle={{
                  borderRadius: 10,
                  width: '60%',
                  alignSelf: 'center',
                  marginVertical: '5%',
                  paddingVertical: 10
                }}
                titleStyle={{fontWeight: 'bold'}}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: ['#3CB4E7', '#0655A4'],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
                title="Receber encomenda"
              />
            </View>
          }
        />
      </View>
    </View>
  );
}
