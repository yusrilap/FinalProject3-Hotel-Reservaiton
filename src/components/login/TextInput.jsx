import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useState, useEffect} from "react";
import { View, Text, Image, StatusBar, TextInput} from 'react-native'; 

const Input = (props) => {
    return (
       <View>
        
    <View style={{flexDirection: "row", marginHorizontal: 25, marginTop:10, }}>
    <View 
      style={{
      justifyContent:'center', 
      alignItems:'center',
      backgroundColor: '#ffffff',
      width: 50,
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
      elevation: 2, 
      }}>
      <Icon name={props.icon} size={22} color="#bdbdbd"/>
      </View>
      <TextInput value={props.state}
      style ={{
        backgroundColor: '#ffffff', 
        // marginHorizontal: 20, 
        // // borderRadius: 15,
        flex: 1,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15, 
        paddingVertical: 15, 
        elevation: 2, 
        paddingLeft: 20,
      }}
      placeholder= {props.placeholder}
      onChange={text => props.set(text)}
      secureTextEntry={props.secureTextEntry}/>
    </View>
    </View>
    ); 
}

export default Input;