import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipper from "../components/Onboarding";
import { responsiveWidth } from "react-native-responsive-dimensions";
const Homepage = () => {
    const [swipperValue, setSwipperValue] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        AsyncStorage.getItem('@swipper').then((value) => {
            setSwipperValue(value)
            setIsLoading(false)
            console.log(value)
        })

    }, []);
    return (
        <>
            {isLoading ? (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../../assets/images/science.png')}
                        style={{
                            width: responsiveWidth(40),
                            height: responsiveWidth(40)
                        }
                        } />
                </View>) : (swipperValue == null && <Swipper />)}</>)
}
export default Homepage