import React, { Component, useState } from 'react'
import { StyleSheet, View, Alert, Button, Text, AppRegistry  } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { RNCamera } from 'react-native-camera'
import Camera from './components/Camera'
import Home from './components/Home';
import FetchData from './components/fetchData';

const App = () => {

  const [toggle, setToggle] = useState(false)

  return(
    <>
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link to="/Camera" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Camera</Text>
        </Link>
        <Link to="/fetchData" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Api Data</Text>
        </Link>
        </View>
      </View>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Camera" component={Camera}/>
      <Route exact path="/fetchData" component={FetchData}/>
    </NativeRouter>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App
