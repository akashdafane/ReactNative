import React from 'react'
import { StyleSheet, View, Alert,Text } from 'react-native'
import { BackButton } from 'react-router-native'

const Home = () => {
  return(
    <>
    <View>
    <Text>This is Home Screen</Text>
    <BackButton />
    </View>
    
    </>
  )
}

export default Home;