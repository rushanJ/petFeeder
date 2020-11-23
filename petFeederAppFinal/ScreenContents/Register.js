import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
class Inputs extends Component {
   state = {
    name: '',
      email: '',
      password: ''
   }
 
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handleName = (text) => {
    this.setState({ name: text })
 }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   register = (email, pass,name) => {
    axios.post('http://petfeeder.xyz:3000/user', {
        email: email,
        name: name,
        password: pass
      })
      .then(function (response) {
        console.log(response.data.success);
        if(response.data.success){
           alert("Account Created Successfully! Please Login");
            Actions.login()
        }
        else alert("Account Not Created ! Please Try Again")
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   render() {
      return (
        
         <View style={{backgroundColor:'#4A546B', height:720}}>
             <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/61fPaBy%2BexL._AC_SL1500_.jpg'}}
   style = {styles.img}
   />
             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.register(this.state.email, this.state.password, this.state.name)
               }>
               <Text style = {styles.submitButtonText}> Register </Text>
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
      backgroundColor: '#b895f0',
      padding: 10,
      margin: 15,
      marginLeft:75,
      height: 60,
      width: 250,
      borderRadius:20
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 30,
      fontSize: 30,
    fontWeight: "bold"
   },
   img:{
      width: 150, 
      marginLeft:130,
      height: 150 ,
      resizeMode: 'stretch',
   }
})