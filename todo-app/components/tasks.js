import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import { AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/taskStyles';

export default function Tasks( { navigation}) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Onboard')}>
        <AntDesign name="arrowleft" size={40} color="black" />
      </TouchableOpacity>
        <View style={styles.newBox}>
        <Text style={styles.textSize}>Add New Task</Text>
        </View>
      </View>

      <View style={styles.inputBox}>
        <TextInput
         placeholder='Add a Heading'
         style={styles.firstInput} 
         />

        <TextInput
         multiline
         numberOfLines={4}
         placeholder='Add a short description'
         style={styles.secondInput} 
         />
         </View>

        <View style={styles.roundColorsBox}>

        <FontAwesome name="circle" size={40} color="#FF1B1B" />
        <FontAwesome name="circle" size={40} color="#DBFF00" />
        <FontAwesome name="circle" size={40} color="#000" />
        <FontAwesome name="circle" size={40} color="#FF1BE8" />
        <FontAwesome name="circle" size={40} color="#00C31F" />
        <FontAwesome name="circle" size={40} color="#00FFF0" /> 
        </View>

        <View style={styles.iconsBox}>
        
        <View style={styles.circleBox}>
          <View style={styles.iconCircle}>
          <MaterialIcons name="alarm" size={40} color="white"/>
          </View>

          <View style={styles.iconCircle}>
          <Feather name="calendar" size={40} color="white"/>
          </View>
          </View>
    
    <View style={styles.selectorBox}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Audio" value="audio" />
        <Picker.Item label="Lecrae - I will find you" value="lecrae" />
      </Picker>
</View>

        
    </View>

      <View style={styles.roundNumBox}>

        <Text style={styles.remindText}>Set Reminder</Text>
          <View style={styles.numCircle}>
              <Text>1</Text>
          </View>

          <View style={styles.numCircle}>
              <Text>2</Text>
          </View>

          <View style={styles.numCircle}>
              <Text>5</Text>
          </View>

          <View style={styles.numCircle}>
              <Text>10</Text>
          </View>
      </View>

    <View style={styles.addBox}>
    <TouchableOpacity style={styles.add}>
        <Text style={styles.addText}>Add Task</Text>
      </TouchableOpacity>
    </View>
      
  </View>
  )
}
