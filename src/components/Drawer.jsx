import {
  View,
  TouchableOpacity,
  Image,
  Animated,
  Text,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import {useState} from 'react';

const menus = [
  {icon: require('../../assets/images/homepage.png'), title: 'Home'},
  {icon: require('../../assets/images/compass.png'), title: 'Explore'},
  {icon: require('../../assets/images/library.png'), title: 'Library'},
  {icon: require('../../assets/images/friends.png'), title: 'Friends'},
  {icon: require('../../assets/images/chat.png'), title: 'Chat'},
  {icon: require('../../assets/images/add-user.png'), title: 'Add Friend'},
];
const Drawer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#6600ff'}}>
        <View
          style={{
            width: '300%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={{width: 70, height: 70, borderRadius: 35, marginLeft: 20}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 22, fontWeight: '800', color: '#fff'}}>
              Dipesh Sah
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                marginTop: 5,
              }}>
              dipesh@bay20.com
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <FlatList
            data={menus}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedValue(index);
                  }}
                  style={{
                    width: 200,
                    height: 50,
                    marginLeft: 15,
                    marginTop: 20,
                    backgroundColor:
                      selectedValue === index ? '#fff' : '#6600ff',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.icon}
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 15,
                      tintColor: selectedValue === index ? '#000' : '#fff',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      color: selectedValue === index ? '#000' : '#fff',
                      fontWeight: '800',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          top: 0,
          right: 0,
          left: 0,
          transform: [{scale: scale}, {translateX: moveToRight}],
          borderRadius: showMenu ? 15 : 0,
        }}>
        <View
          style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => {
              Animated.timing(scale, {
                toValue: showMenu ? 1 : 0.7,
                duration: 300,
                useNativeDriver: true,
              }).start();
              Animated.timing(moveToRight, {
                toValue: showMenu ? 0 : 250,
                duration: 300,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showMenu);
            }}>
            <Image
              source={require('../../assets/images/menus.png')}
              style={{
                width: 33,
                height: 33,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontWeight: '800',
              color: '#000',
            }}>
            {menus[selectedValue].title}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Drawer;
