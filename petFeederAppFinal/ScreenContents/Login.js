import React, { Component } from 'react'
import {AsyncStorage, View, Text, TouchableOpacity,  StyleSheet,Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInput from 'react-native-textinput-with-icons'
 
class Inputs extends Component {
   state = {
      email: 'rushanthasindu@gmail.com',
      password: 'rushan'
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {

   //  alert(email);
    
    axios.post('http://petfeeder.xyz:3000/user/auth', {
            email: email,
            password: pass
      })
      .then(function (response) {
         // const ds=response.data.dataset;
        console.log(response.data.dataset[0].id);
        if(response.data.success){
            AsyncStorage.setItem('userName', response.data.dataset[0].name);
            AsyncStorage.setItem('userId', response.data.dataset[0].id.toString());
            
            Actions.home()
        }
        else alert(" Please Try Again")
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   render() {
      return (
         <View style = {styles.container}>
             <Image source = {{uri:'http://critssl.com/img1/image11.png'}}
   style = {styles.img}
   />
<View style = {styles.input}>
         <TextInput

   labelColor='#4A546B'
               label="User Name"
               // RTL must used when label in arabic ex: label="اللغة العربيه"
               leftIcon="person"
               leftIconType="oct"
               rippleColor="blue"
               rightIcon="react"
               rightIconType="material"
              
               onChangeText={this.handleEmail}
               />
</View>
<View style = {styles.input}>
         <TextInput

   labelColor='#4A546B'
               label="Password"
               // RTL must used when label in arabic ex: label="اللغة العربيه"
               leftIcon="key"
               leftIconType="oct"
               rippleColor="blue"
               rightIcon="react"
               rightIconType="material"
               TextInput='password'
              
               onChangeText={this.handlePassword}
               />
</View>
        
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      height:450
   },
   input: {
      marginTop: 15,
    
      width: 320,
      marginLeft:40,
      borderRadius:5,
      
      backgroundColor: "#a9d6cf"
   },
   submitButton: {
      backgroundColor: '#f542b3',
      padding: 8,
      margin: 15,
      marginLeft:90,
      height: 50,
      width: 200,
      borderRadius:20
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 25,
      fontSize: 30,
    fontWeight: "bold"
   },
   img:{
      width: 200, 
      marginLeft:95,
      height: 300 
   }
})