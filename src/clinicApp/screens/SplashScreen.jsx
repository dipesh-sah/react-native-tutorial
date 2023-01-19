import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import ModalPage from './ModalPage';
const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [splashValue, setSplashValue] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('@splash').then(value => {
      setLoading(false);
      setSplashValue(value);
    });
  }, []);
  const navigation = useNavigation();
  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : splashValue === null ? (
        <ModalPage />
      ) : (
        navigation.navigate('home')
      )}
    </View>
  );
};

export default SplashScreen;
