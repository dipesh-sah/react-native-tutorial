import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('@modal').then(value => {
      setIsVisible(!value && true);
      setSelectedId(value);
    });
  }, [isVisible]);
  const navigation = useNavigation();
  console.log(selectedId);
  return (
    <View>
      <Modal
        isVisible={isVisible}
        useNativeDriver={true}
        backdropOpacity={0}
        backdropColor="#fff">
        <View>
          <Text style={styles.header}>Choose Your Choice</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 30,
              borderRadius: responsiveWidth(1),
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                AsyncStorage.setItem('@modal', 'id1');
                setIsVisible(false);
              }}>
              <Image
                source={require('../../../assets/images/1.png')}
                style={styles.image}
              />
              <Text style={styles.btnText}>First</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                AsyncStorage.setItem('@modal', 'id2');
                setIsVisible(false);
              }}>
              <Image
                source={require('../../../assets/images/2.png')}
                style={styles.image}
              />
              <Text style={styles.btnText}>Second</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text>LandingPage</Text>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text>Test</Text>
      </TouchableOpacity>
      <Text>{selectedId !== null && selectedId}</Text>
    </View>
  );
};

export default LandingPage;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#9932cc',
    padding: 30,
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
  },
  image: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
    margin: 10,
  },
  btnText: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: '800',
    color: '#fff',
  },
  header: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '800',
    textAlign: 'center',
  },
});
