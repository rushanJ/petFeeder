import React, { Component } from 'react'
import {AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
class Inputs extends Component {
   state = {
      email: 'rushanthasindu10@gmail.com',
      password: 'rushan'
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
    
    axios.post('http://192.168.8.101:3000/user/auth', {
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
             <Image source = {{uri:'https://previews.123rf.com/images/tigatelu/tigatelu1503/tigatelu150300009/37538150-hungry-dog-cartoon-with-dog-food.jpg'}}
   style = {styles.img}
   />
   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
              
               placeholder = "Username"
               placeholderTextColor = "#000"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
             
               placeholder = "Password"
               placeholderTextColor = "#000"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
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
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#000',
      borderWidth: 1,
      paddingLeft: 70,
      width: 300,
      marginLeft:55,
      borderRadius:20,
      fontSize: 20,
      backgroundColor: "#a9d6cf"
   },
   submitButton: {
      backgroundColor: '#f542b3',
      padding: 10,
      margin: 15,
      marginLeft:75,
      height: 60,
      width: 250,
      borderRadius:20
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 50,
      fontSize: 30,
    fontWeight: "bold"
   },
   img:{
      width: 200, 
      marginLeft:95,
      height: 300 
   }
})