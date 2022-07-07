/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CaptureOneScreen from './src/screens/CaptureOneScreen';
import CaptureTwoScreen from './src/screens/CaptureTwoScreen';
import AppContext from './src/context/AppContext';
import useInitialState from './src/hooks/useInitialState';
//import { RNCamera } from 'react-native-camera'


const App = () => {
  const Stack = createNativeStackNavigator();
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <NavigationContainer>

        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#6786dc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        >
  
          <Stack.Screen name="step2" component={CaptureTwoScreen} 
            options={{ title: 'Candidatos' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;



/*
        <Stack.Screen
            name="step1"
            component={CaptureOneScreen}
            options={{ title: 'Zona' }}
          /> 


 */         