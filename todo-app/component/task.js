import { View, Text,  TextInput, TouchableOpacity} from 'react-native';
import Style from '../styles/taskStyles.js';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome,Feather} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';



const Task = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
return (
  <View style={Style.container}> 
    <View style={Style.heading}>
    <FontAwesome name = "arrow-left"  size={35} />    
    <Text style={Style.text}>Add New Task</Text>
    
      </View> 
     <View>
     <TextInput style={Style.input} placeholder="Add a heading"/>
     <TextInput style={Style.inputbig} placeholder="Add a short description"/>
     </View> 

     <View style={{flexDirection:'row', marginLeft:21, justifyContent:'space-between',marginBottom:32,}} >
     <FontAwesome name="circle" size={40} color="#FF1B1B" />
     <FontAwesome name="circle" size={40} color="#DBFF00" />
     <FontAwesome name="circle" size={40} color="#000" />
     <FontAwesome name="circle" size={40} color="#00C31F" />
     <FontAwesome name="circle" size={40} color="#FF1B1B" />
     <FontAwesome name="circle" size={40} color="#00FFF0" />
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between'}} >
     <View style={{flexDirection:'row', marginLeft:21, justifyContent:'space-between',gap:20, marginBottom:30}} >
     <MaterialIcons name="alarm" size={50} color="black"/>
     <Feather name="calendar" size={50} color="black" />
     </View>
     <View >
     
      <Picker 
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
      } style={{borderWidth:3, borderColor:"red", weight:20, height:30}}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
    </View>
    </View> 

    <View style={{flexDirection:'row', marginLeft:5, justifyContent:'space-between',marginBottom:32,}} >
     <Text style={{fontSize:30}}> Set Timer </Text>
     <FontAwesome name="circle" size={40} color="#DBFF00" />
     <FontAwesome name="circle" size={40} color="#000" />
     <FontAwesome name="circle" size={40} color="#00C31F" />
     <FontAwesome name="circle" size={40} color="#00C31F" />
    
    </View>

    <TouchableOpacity >
          <View style={Style.button}>
            <Text style={{color: 'white', fontSize: 20}}>Add Task</Text>
          </View>
    </TouchableOpacity>



    </View>

    
  )
}


export default Task