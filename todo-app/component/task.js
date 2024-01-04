import { View, Text,  TextInput, TouchableOpacity} from 'react-native';
import Style from '../styles/taskStyles.js';
import React, { useState } from 'react';
import {AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';





const Task = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  
return (
  <View style={Style.container}> 
   <View style={Style.heading}>
        <AntDesign name="arrowleft" size={40} color="black" />
        <View style={Style.newBox}>
        <Text style={Style.textSize}>Add New Task</Text>
        </View>
      </View> 

      <View style={Style.inputBox}>
        <TextInput
         placeholder='Add a Heading'
         style={Style.firstInput} 
         />

        <TextInput
         multiline
         numberOfLines={4}
         placeholder='Add a short description'
         style={Style.secondInput} 
         />
         </View>

     <View style={Style.roundColorBox} >
     <FontAwesome name="circle" size={40} color="#FF1B1B" />
     <FontAwesome name="circle" size={40} color="#DBFF00" />
     <FontAwesome name="circle" size={40} color="#000" />
     <FontAwesome name="circle" size={40} color="#00C31F" />
     <FontAwesome name="circle" size={40} color="#FF1B1B" />
     <FontAwesome name="circle" size={40} color="#00FFF0" />
    </View>

    <View style={Style.iconsBox}>
        
        <View style={Style.circleBox}>
          <View style={Style.iconCircle}>
          <MaterialIcons name="alarm" size={40} color="white"/>
          </View>

          <View style={Style.iconCircle}>
          <Feather name="calendar" size={40} color="white"/>
          </View>
          </View>
    
    <View style={Style.selectorBox}>
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

<View style={Style.roundNumBox}>

<Text style={Style.remindText}>Set Reminder</Text>
  <View style={Style.numCircle}>
      <Text>1</Text>
  </View>

  <View style={Style.numCircle}>
      <Text>2</Text>
  </View>

  <View style={Style.numCircle}>
      <Text>5</Text>
  </View>

  <View style={Style.numCircle}>
      <Text>10</Text>
  </View>
</View>

<View style={Style.addBox}>
<TouchableOpacity style={Style.add}>
<Text style={Style.addText}>Add Task</Text>
</TouchableOpacity>
</View>


    </View>

    
  )
}


export default Task