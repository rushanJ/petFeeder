import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
class Inputs extends Component {
   state = {
      deviceId: '',
      password: '',
      slot1: '',
      slot2: '',
      slot3: '',
      user: ''
   }

   componentDidMount() {
    
       AsyncStorage.getItem('userId').then((value) => this.setState({ 'user': value }))
    
  }
 
   handleDeviceId = (text) => {
      this.setState({ deviceId: text })
   }
   handleSlot1 = (text) => {
    this.setState({ slot1: text })
 }
 handleSlot2 = (text) => {
   this.setState({ slot2: text })
}
handleSlot3 = (text) => {
   this.setState({ slot3: text })
}
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   addDevice = (device, pass,user,slot1,slot2,slot3) => {
    axios.post('http://192.168.8.101:3000/userDevice/', {
        deviceId: device,
        user: user,
        password: pass,
        slot1: slot1,
        slot2: slot2,
        slot3: slot3,
        

      })
      .then(function (response) {
        console.log(response.data.success);
        if(response.data.success){
           alert("Device Added Successfully !");
            Actions.home()
        }
        else alert("Device Not Added ! Please Try Again")
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   render() {
      return (
         <View style = {styles.container}>
             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Device Id"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleDeviceId}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Slot 1 Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleSlot1}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Slot 2 Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleSlot2}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Slot 3 Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleSlot3}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.addDevice(this.state.deviceId, this.state.password, this.state.user, this.state.slot1, this.state.slot2, this.state.slot3)
               }>
               <Text style = {styles.submitButtonText}> Add Device </Text>
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
      padding: 5,
      margin: 15,
      marginLeft:75,
      height: 60,
      width: 250,
      borderRadius:20
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 10,
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