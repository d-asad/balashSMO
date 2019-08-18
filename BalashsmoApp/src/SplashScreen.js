import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,StatusBar } from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>

        <StatusBar barStyle="light-content" backgroundColor="#2E1539"></StatusBar>

        <Image style={styles.logo} source={require('./Images/babaladla.png')} />


      </View>
    );
  }
}

const styles = StyleSheet.create({

    container:
    {
      backgroundColor: "#452055",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    logo:
    {
      resizeMode: "contain",
      width: 400,
      height: 400
    }
  });
