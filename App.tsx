import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native'
import "intl";
import "intl/locale-data/jsonp/pt";
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Routes } from './src/routes';

import { AppRoutes } from './src/routes/app.routes';

import { SignIn } from './src/screens/SignIn';

import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if(!fontsLoaded || userStorageLoading) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
        <AuthProvider>
          <Routes /> 
        </AuthProvider>
    </ThemeProvider>
  )
}


