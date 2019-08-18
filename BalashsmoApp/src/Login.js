import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:5,justifyContent:"center"}}>
                    <Image style={styles.logostyle} source={require('./Images/balashsmologin.png')} />

                    <Text style={styles.textstyle}>Login to your account</Text>

                    <TextInput style={styles.inputstyle} placeholder="Email" />
                    <TextInput style={styles.inputstyle} placeholder="Password" />
                    <View style={{ flexDirection: "row" }}>
                        <CheckBox style={{ width: 35 }} />
                        <Text style={{ textAlign: "left", paddingVertical: 5, fontSize: 17, flex: 1 }}>Remember me</Text>
                        <Text style={{ paddingVertical: 6, color: "blue", textAlign: "right", flex: 2 }}>Forgot Password</Text>
                    </View>

                    <TouchableOpacity style={styles.buttoncontainer}>
                        <Text style={styles.buttonstyle}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex:1,justifyContent:"flex-end" }}>

                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{fontSize: 17,}}>Don't have account yet? </Text>
                    <Text style={{color:"blue",fontSize: 17,}}>Sign Up</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    btnstyle: {
        height: 100
    },

    logostyle: {
        resizeMode: "contain",
        width: 400,
        height: 95
    },

    container: {

        flex: 1,
        backgroundColor:"#fff",
        padding: 20,
        justifyContent:"center"

    },

    textstyle: {
        textAlign: "center",
        fontSize: 20,
        paddingBottom: 30,
        fontWeight: "bold",
        color: "#452055"
    },


    inputstyle:
    {
        marginBottom: 20,
        borderWidth: 0.5,
        padding: 10
        // width:400
    },

    buttoncontainer:
    {
        backgroundColor: "#f1c40f",
        // width:400,
        // height:55,
        paddingVertical: 15,
        marginTop: 15
    },

    buttonstyle:
    {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }





});

