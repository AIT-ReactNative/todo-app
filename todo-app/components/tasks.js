import { Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/taskStyles';

export default function Tasks() {
  return (
    <View style={styles.container}>
        <View style={styles.title}>
        <AntDesign name="arrowleft" size={40} color="black" />
        <View style={styles.newBox}>
        <Text style={styles.textSize}>Add New Task</Text>        
        </View>
            </View>
    </View>
  )
}

