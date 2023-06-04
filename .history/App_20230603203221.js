import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0655A4" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
};


export default App;
