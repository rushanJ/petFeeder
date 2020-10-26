import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'

class Inputs extends Component {
   state = {
      deviceId: '',
      date: '',
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

   addShedule= (device, date,time) => {
    axios.post('http://192.168.8.101:3000/shedule/', {
        device: device,
        date: date,
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
         <View style = {styles.container}>
            
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

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "HH:MM:SS"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleTime}/>
               
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.addShedule(this.state.deviceId, this.state.date, this.state.time)
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