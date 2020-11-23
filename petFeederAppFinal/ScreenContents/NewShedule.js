import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  StyleSheet,AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import TextInput from 'react-native-textinput-with-icons'
class Inputs extends Component {
   state = {
      deviceId: '',
      date: '',
      slot1Value: '',
      slot2Value: '',
      slot3Value: '',
      time: ''
   }

   componentDidMount() {
      AsyncStorage.getItem('device').then((value) => this.setState({ 'deviceId': value }))
      AsyncStorage.getItem('userId').then((value) => this.setState({ 'user': value }))
    
  }
 
   handleDate = (text) => {
      this.setState({ date: text })
   }
  
 handleTime = (text) => {
   this.setState({ time: text })
}

handleSlot3Value = (text) => {
   this.setState({ slot3Value: text })
}

handleSlot2Value = (text) => {
   this.setState({ slot2Value: text })
}

handleSlot1Value = (text) => {
   this.setState({ slot1Value: text })
}

   addShedule= (device, date,time,slot1Value,slot2Value,slot3Value) => {
    axios.post('http://petfeeder.xyz:3000/shedule/', {
        device: device,
        date: date,
        slot1Value: slot1Value,
        slot2Value: slot2Value,
        slot3Value: slot3Value,
        time: time,
      

      })
      .then(function (response) {
        console.log(response.data.success);
        if(response.data.success){
           alert("Shedule Added Successfully !");
            Actions.home()
        }
        else alert("Shedule Not Added ! Please Try Again")
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   render() {
      return (
         <View style={{backgroundColor:'#4A546B', height:720}}>
            
                <DatePicker
                     style={styles.input}
                     date={this.state.date}
                     mode="date"
                     placeholder="select date"
                     format="YYYY-MM-DD"
                     
                     confirmBtnText="Confirm"
                     cancelBtnText="Cancel"
                     customStyles={{
                        dateIcon: {
                           position: 'absolute',
                           left: 5,
                           top: 4,
                           marginLeft: 0
                        },
                        dateInput: {
                           marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                     }}
                     onDateChange={this.handleDate}          
               />
               <View style = {styles.input}>
                     <TextInput
                         labelColor='#4A546B'
                           label="HH:MM:SS"
                           // RTL must used when label in arabic ex: label="اللغة العربيه"
                           leftIcon="clock"
                           leftIconType="oct"
                           rippleColor="blue"
                           rightIcon="react"
                           rightIconType="material"
                           onChangeText={this.handleTime}
                           />
               </View>
               <View style = {styles.input}>
                     <TextInput
                         labelColor='#4A546B'
                           label="Slot 1 Value"
                           // RTL must used when label in arabic ex: label="اللغة العربيه"
                           leftIcon="grabber"
                           leftIconType="oct"
                           rippleColor="blue"
                           rightIcon="react"
                           rightIconType="material"
                           onChangeText={this.handleSlot1Value}
                           />
               </View>
               <View style = {styles.input}>
                     <TextInput
                         labelColor='#4A546B'
                           label="Slot 2 Value"
                           // RTL must used when label in arabic ex: label="اللغة العربيه"
                           leftIcon="grabber"
                           leftIconType="oct"
                           rippleColor="blue"
                           rightIcon="react"
                           rightIconType="material"
                           onChangeText={this.handleSlot2Value}
                           />
               </View>
               <View style = {styles.input}>
                     <TextInput
                         labelColor='#4A546B'
                           label="Slot 3 Value"
                           // RTL must used when label in arabic ex: label="اللغة العربيه"
                           leftIcon="grabber"
                           leftIconType="oct"
                           rippleColor="blue"
                           rightIcon="react"
                           rightIconType="material"
                           onChangeText={this.handleSlot3Value}
                           />
               </View>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.addShedule(this.state.deviceId, this.state.date, this.state.time, this.state.slot1Value, this.state.slot2Value, this.state.slot3Value)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
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
      marginTop: 15,
    
      width: 320,
      marginLeft:40,
      borderRadius:5,
      
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