import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useState, useEffect} from "react";
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView} from 'react-native'; 
import Input from './src/components/TextInput';
import LoginButton from './src/components/LoginButton';


const App = () => {

  const [email, setEmail] =useState('');
  const[password, setPassword] =useState('');
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'#dbe4f3'} barStyle={'light-content'}/>
      <View style={{ justifyContent: 'center', 
      alignItems:'center', 
      marginTop: 80,}}>
      <Image 
      source={require('./src/images/welcome.png')}
      style={{width: 193, height: 193}}></Image>
      <Text style={{ fontWeight: 'bold', fontSize: 25,}}>GOJO Hotel</Text>
      <Text style={{marginTop: 10, fontWeight:'bold', fontSize: 20}}> Silahkan Login</Text>
      </View>

      <Input e
      state={email} 
      set={setEmail} 
      icon='envelope' 
      placeholder='Masukkan Email Anda'
      secureTextEntry={false}
      />
      <Input 
      state={password} 
      set={setPassword} 
      icon='lock' 
      placeholder='Masukkan Password Anda'
      secureTextEntry={true}
      />
      
      <LoginButton login="Login" color='#2395f2'/>

    </ScrollView>
  );
}

export default App;