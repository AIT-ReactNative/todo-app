import { Text , View, SafeAreaView, Image, Pressable } from 'react-native';
import React from 'react';
import Style from '../styles/onBoardingStyles.js';

const Onboarding = () =>{
    return (
        <SafeAreaView>
            <View style={Style.heading}>
            
            <Image source={require('../assets/onboard/To_do_list_.png')} style={Style.images} />
            
            <View style={Style.footer}>
            <Text style={Style.title}>
            Welcome to Todo List Onboarding.
            </Text>
            <Text style={Style.description}>
            This is a very simple app that will help you manage your Todo List.
            </Text>

            <View style={Style.buttonRow}>
                <Text style={Style.skipText}> Skip </Text>
                <Pressable style={Style.button}>
                    <Text style={Style.buttonText}>
                    Continue
                    </Text>
                </Pressable>
            </View>

            </View>

           


            </View>
        </SafeAreaView>
    )
}

export default Onboarding