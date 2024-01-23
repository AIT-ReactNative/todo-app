import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, Image } from 'react-native'
import {useState} from 'react';
import { StatusBar } from "expo-status-bar";
import { Gesture, Directions, GestureDetector } from 'react-native-gesture-handler';
import Animated, { BounceIn, SlideInLeft, SlideInRight } from 'react-native-reanimated';

const onboardingSteps = [
    {
        img: require('../assets/images/To_do_list.png'),
        title: 'Welcome to DailyDo',
        description: 'Start your day with DailyDo, your personal task manager. Efficiently organize your tasks, set priorities and stay on top of your daily activities.'
        
    },
    {
        img: require('../assets/images/task_list_6x9d.png'),
        title: 'Stay Organized',
        description: 'DailyDo helps you stay organized by providing a simple and intuitive interface. Categorize your tasks, set deadlines and achieve your goals with ease.'
    },
    {
        img: require('../assets/images/Checklist.png'),
        title: 'Boost Productivity',
        description: 'Supercharge your productivity with DailyDo. Break down your tasks into manageable steps, track your progress and accomplish more each day.'
    },
     {
        img: require('../assets/images/Complete_task.png'),
        title: 'Never Miss a Deadline',
        description: 'DailyDo ensures you never miss a deadline again. Receive timely reminders, prioritize tasks and experience the satisfaction of completing your to-dos on time.'
    },
];


const Onboarding = ({ navigation }) => {
    const [screenIndex, setScreenIndex]  = useState(0)
    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        navigation.navigate('SignUp');
    };

    const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue)

    const swipeBack = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(onBack)

    const swipes = Gesture.Simultaneous(swipeBack, swipeForward)


  return (
    <SafeAreaView style={styles.page}>
    <StatusBar hidden />

     <View style={styles.stepIndicatorContainer}>
    {onboardingSteps.map((step, index) => (
        <View 
        key={index}
        style={[styles.stepIndicator, {backgroundColor: index === screenIndex ? '#6366FF' : styles.stepIndicator.backgroundColor}]} />
    ))}
    </View>

    <GestureDetector gesture={swipes}>
    <Animated.View 
    style={styles.pageContent}
    key={screenIndex}>

<Animated.View
    entering={BounceIn}
>
<Image 
    source={data.img}
    style={styles.image}
/>
{/* <FontAwesome5
    style={styles.image} 
    name={data.icon} size={150} 
    color="#CEF202"     
    /> */}
</Animated.View>
    
<View style={styles.footer}>
    <Animated.Text 
    entering={SlideInLeft}
    style={styles.title}>{data.title}
    </Animated.Text>
    
    <Animated.Text 
    entering={SlideInRight.delay(100)}
    style={styles.description}>{data.description}</Animated.Text>
     
    <View style={styles.buttonsRow}>
    <Text 
    onPress={endOnboarding}
    style={styles.skipText}>Skip</Text>
    <TouchableOpacity 
    onPress={onContinue}
    style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
    </View>
    </View>

    </Animated.View>
    </GestureDetector>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    title: {
        color: '#080930',
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        marginVertical: 20
    },
    description: {
        color: 'gray',
        fontSize: 20,
        lineHeight: 28
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: '#15141A',
        backgroundColor: '#FFF'
    },
    image: {
        height: 280,
        width: '100%',
        alignSelf: 'center',
        marginTop: 30
    },
    footer: {
        marginTop: 'auto'
    },
    pageContent: {
        padding: 20,
        flex: 1
    },
    button: {
        backgroundColor: '#080930',
        borderRadius: 50,
        alignItems: 'center',
        width: 250
    },
    buttonsRow: {
        gap: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonText: {
        color: '#FDFDFD',
        fontSize: 20,
        padding: 15,
        paddingHorizontal: 20
    },

    skipText: {
        color: '#6366FF',
        fontSize: 25,
        padding: 15,
        paddingHorizontal: 20
    },


    stepIndicatorContainer: {
        flexDirection: "row",
        gap: 5,
        marginHorizontal: 15
    },

    stepIndicator: {
        flex: 1,
        height: 5, 
        backgroundColor: 'gray',
        borderRadius: 10
    }
   
})