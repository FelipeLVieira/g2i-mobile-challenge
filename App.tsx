import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Archivo_400Regular, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import AppStack from './routes/AppStack';
import { PlayerProvider } from './contexts/player';
import SQL from './SQLite/SQLite';

export default function App() {

  useEffect(() => {
    SQL.initDatabase();

    const backAction = () => {
      () => null
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  }, []);

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <PlayerProvider>
            <AppStack/>
            <StatusBar style="light" />
        </PlayerProvider>
      </>
    );
  }
};