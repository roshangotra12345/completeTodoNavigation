import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Elements from '../Component/Elements'
import Test from '../Component/Test'

const Stack =  createStackNavigator()
const Navigation = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='ToDo' component={Elements} />
        <Stack.Screen name='Todo List' component={Test} />
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})