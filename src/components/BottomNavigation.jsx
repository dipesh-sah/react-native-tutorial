import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BottomNavigations = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: responsiveWidth(100),
          borderRadius: responsiveWidth(4),
          height: 70,
          backgroundColor: 'wheat',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/homepage.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/add.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/compass.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: responsiveWidth(100),
          borderRadius: responsiveWidth(4),
          height: 70,
          backgroundColor: 'wheat',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/homepage.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/add.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/compass.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text>Explore</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: responsiveWidth(100),
          borderRadius: responsiveWidth(4),
          height: 70,
          backgroundColor: 'wheat',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/homepage.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsiveWidth(10),
            }}>
            <Image
              source={require('../../assets/images/add.png')}
              style={{
                width: 40,
                height: 40,
                tintColor: '#fff',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(33),
            height: responsiveHeight(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/compass.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text>Explore</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: responsiveWidth(100),
          height: 100,
          marginTop: 30,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: responsiveWidth(100),
            borderRadius: responsiveWidth(4),
            height: 70,
            backgroundColor: 'wheat',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
          }}>
          <TouchableOpacity
            style={{
              width: responsiveWidth(33),
              height: responsiveHeight(100),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/homepage.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: responsiveWidth(33),
              height: responsiveHeight(100),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/compass.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text>Explore</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', height: '100%'}}>
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsiveWidth(10),
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/add.png')}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomNavigations;

const styles = StyleSheet.create({});
