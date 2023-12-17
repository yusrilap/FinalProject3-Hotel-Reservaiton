import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useState, useEffect} from "react";
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity} from 'react-native'; 


const LoginButton= (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor : props.color,
            paddingVertical: 14,
            marginTop: 20,
            marginHorizontal: 25, 
            borderRadius: 50,
            elevation: 6,
            }}>
            <Text style ={{
              Color :'#fffff', 
              textAlign:'center'}}>{props.login}</Text>
          </TouchableOpacity>
    );
}

export default LoginButton;
