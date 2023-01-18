import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const ResponsiveDesign = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(100),
      }}>
      <View
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,
          borderRadius: 50,
          marginBottom: 10,
        }}></View>
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          width: responsiveWidth(90),
          height: responsiveHeight(10),
          borderRadius: responsiveWidth(4),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: responsiveFontSize(3)}}>
          Click Me
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize: responsiveFontSize(3), marginTop: 10}}>
        is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like sometimes on purpose (injected humour and the like).
      </Text>
    </View>
  );
};

export default ResponsiveDesign;

const styles = StyleSheet.create({});
