import React from "react";
import {Image, Text, View} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { responsiveWidth} from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Swipper = () =>{
    return(
        <View style={{
            flex:1,
        }}>
            <Onboarding
                onDone={()=> {
                    console.log('test')
                    AsyncStorage.setItem('@swipper', 'done')
                }}

                pages={[
                {
                    backgroundColor:"#00b0e1",
                    image:<Image source={require('../../assets/images/1.png')} style={{
                        width:responsiveWidth(50),
                        height:responsiveWidth(50),
                         borderRadius:responsiveWidth(10)}
                    }/>,
                    title:"Onboarding",
                    subtitle:"Done with React Native Onboarding Swipper"
                },
                {
                    backgroundColor:"#73c7e8",
                    image:<Image source={require('../../assets/images/2.png')} style={{
                        width:responsiveWidth(50),
                        height:responsiveWidth(50),
                        borderRadius:responsiveWidth(10)}
                    }/>,
                    title: 'The Title',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor:"#4bd3b3",
                    image:<Image source={require('../../assets/images/3.png')} style={{
                        width:responsiveWidth(50),
                        height:responsiveWidth(50),
                        borderRadius:responsiveWidth(10)}
                    }/>,
                    title: 'Triangle',
                    subtitle: "Beautiful, isn't it?",
                },
            ]} />
        </View>
    )
}
export default Swipper