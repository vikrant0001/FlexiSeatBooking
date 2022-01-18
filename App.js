/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,

  StatusBar,
  StyleSheet,
  
  useColorScheme,
 
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#13294b'}}>
      
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Image style={{
            resizeMode: "center",
            height: '100%',
            width: '100%'
          }}  source={require('./assets/images/spalsh-screen-icon.png')} />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
