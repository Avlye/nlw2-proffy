import React from "react";

import { AppLoading } from "expo";
import { View, Text, Image } from "react-native";

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import { styles } from './styles'

import landingImg from '../../assets/images/landing.png'

export function Landing() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular, Archivo_700Bold,
    Poppins_400Regular, Poppins_600SemiBold
  })

  if (!fontsLoaded) return <AppLoading />
  else {
    return (
      <View style={styles.container}>
        <Image source={landingImg} style={styles.banner} />

        <Text style={styles.title}>
          Seja bem-vindo, {'\n'}

          <Text style={styles.titleBold}>
            O que deseja fazer?
          </Text>
        </Text>
      </View>
    )
  }
}
