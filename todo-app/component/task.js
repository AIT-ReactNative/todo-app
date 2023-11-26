import { View, Text } from 'react-native';
import Style from '../styles/taskStyles.js';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Task = () => {
return (
  <View style={Style.container}> 
            <FontAwesome name = "arrow-left"  size={35} />    
            <Text style={Style.text}>Add New Task</Text>
            
            
    </View>
  )
}


export default Task