import { Text , View, SafeAreaView, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import Style from '../styles/onBoardingStyles.js';
import Animated, {FadeIn, 
    FadeOut,
    SlideOutLeft,
    SlideInRight,
    SlideInLeft,
} from 'react-native-reanimated';


const onboardingSteps = [
    {
        title: 'Welcome to My Todo List App.',
        description: 'This is a very simple app that will help you manage your Todo List.',
        onImages: 'To_do_list_',
        
    },
    {
        title: 'Task List Introduction.',
        description: 'Learn how to create and manage checklists to stay organized and focused.',
        onImages: 'To_do_list_1',
    },
    {
        title: 'Checklist Overview',
        description: 'This is a very simple app that will help you manage your Todo List.',
        onImages: 'To_do_list_2',
        
    },
    {
        title: 'Complete Task Tutorial.',
        description: 'Discover how to mark tasks as complete and track your progress.',
        onImages: 'To_do_list_3',
        
    },

    
]

const images = {
    'To_do_list_': require('../assets/onboard/To_do_list_.png'),
    'To_do_list_1': require('../assets/onboard/task_list_6x9d.png'),
    'To_do_list_2': require('../assets/onboard/Checklist__re_2w7v.png'),
    'To_do_list_3': require('../assets/onboard/Complete_task_re_44tb.png'),
    
  };
  
const Onboarding = () =>{
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            setScreenIndex(0);
        } else {
            setScreenIndex(screenIndex + 1);
        }
       
        //console.warn('onContinue');
    };

    return (
        <SafeAreaView>
            <Animated.View entering={FadeIn} existing={FadeOut} style={Style.heading} key={screenIndex}>
                <View style={Style.stepIndicatorContainer}>

                    {onboardingSteps.map((step, index) => (
                        
                        <View key={index} style={[Style.stepIndicator,{backgroundColor: index === screenIndex ? '#6366FF' : 'gray'}]}/>
                   ))}

                
                </View>
           
           <Animated.View entering={FadeIn} existing={FadeOut}>
            <Image source={images[data.onImages]} style={Style.images} />
            </Animated.View>

            <View style={Style.footer}>
            <Animated.Text entering={SlideInRight} existing={SlideOutLeft} style={Style.title}>
            {data.title}
            </Animated.Text> 
            <Animated.Text entering={SlideInRight.delay(300)} style={Style.description}>
            {data.description}
            </Animated.Text>

            <View style={Style.buttonRow}>
                <Text style={Style.skipText}> Skip </Text>
                <Pressable onPress={onContinue} style={Style.button}>
                    <Text style={Style.buttonText}>
                    Continue
                    </Text>
                </Pressable>
            </View>

            </View>

           


            </Animated.View>
        </SafeAreaView>
    )
}

export default Onboarding