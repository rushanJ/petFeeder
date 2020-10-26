import React from "react";
import {AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet ,Button,Image} from 'react-native'
import axios from "axios";
import { FlatGrid } from 'react-native-super-grid';
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';
 

export default class App extends React.Component {
    state = {
        deviceId: '1',
        userId:'1',
        device: [],
        shedule:[],
        tableHead: ['Shedule Id', 'Date', 'Time', 'Status'],
        tableData: [
        
        ]
    };
    componentDidMount() {
        AsyncStorage.getItem('device').then((value) => this.setState({ 'deviceId': value }))
         AsyncStorage.getItem('userId').then((value) => this.setState({ 'userId': value }))
         AsyncStorage.getItem('device').then((value) => this.getDevices())
         AsyncStorage.getItem('device').then((value) => this.getShedule())
        //  AsyncStorage.getItem('device').then((value) => console.log(this.state.shedule))
         
          // this.state.tableData.push(['this.state.shedule[0].id', 'b', 'c', 'd']);
         
        
    //    this.getDevices();
    
    }
    getDevices = () => {
       axios
           .get("http://192.168.8.101:3000/device/"+this.state.deviceId)
           .then(data => this.setState({ device: data.data }))
           .catch(err => {
               console.log(err);
               return null;
           });
    };
    getShedule = () => {
      axios
          .get("http://192.168.8.101:3000/shedule/"+this.state.deviceId)
          .then(data => this.setState({ shedule: data.data }))
          .catch(err => {
              console.log(err);
              return null;
          });
   };
    selectDevice=(id)=> {
         AsyncStorage.setItem('device',id.toString());
         AsyncStorage.getItem('device').then((value) => alert(value));
         
        // alert('You tapped the button!'+id)
      }
    
    render() {
     
      this.state.shedule.map((item, index) => (
        this.state.tableData.push([item.id, item.date, item.time, item.time])
     ))
     console.log(this.state.shedule)
       return (
           <View>
               {this.state.device.length === 0 ? (
                  <Image source = {{uri:'https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'}}
                  style = {styles.img}
                  />
               ) : (
               
                        <View style = {styles.container}>
                      <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/61fPaBy%2BexL._AC_SL1500_.jpg'}}style = {styles.imgDevice}/>

                        <Text style = {styles.deviceId}>{this.state.device[0].device} </Text>
                        <Text style = {styles.slotInfo} >{this.state.device[0].slot1Name}         {this.state.device[0].slot1Status} %</Text>
                        <Text style = {styles.slotInfo}>{this.state.device[0].slot2Name}         {this.state.device[0].slot2Status} % </Text>
                        <Text style = {styles.slotInfo}>{this.state.device[0].slot3Name}         {this.state.device[0].slot3Status}% </Text>
                       
                      <TouchableOpacity
                            onPress = {Actions.newShedule}
                            title = "New Device"
                            
                            style ={styles.submitButton}
                        >
                           <Text style={styles.name}>New Shedule</Text>
                          </TouchableOpacity>

                          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                                <Rows data={this.state.tableData} textStyle={styles.text}/>
                          </Table>
                    </View>

                    
                       
                      
               )}


           </View>
       );
     }
}


const styles = StyleSheet.create({
  
    gridView: {
     marginTop: 10,
    
   },
   itemContainer: {
     justifyContent: 'flex-end',
     borderRadius: 5,
     borderWidth:1,
     borderColor:'#000',
     padding: 10,
     height: 150,
   },
   deviceId: { 
    
     fontSize: 50,
     color: '#000',
     fontWeight: '600',
     marginLeft:145,
   },
   slotInfo: { 
    
    fontSize: 20,
    color: '#d11938',
    fontWeight: '600',
    marginLeft:90,
  },
   
   img:{
    margin: 200,
      width: 300, 
      marginLeft:55,
      height: 300 
   },
   itemCode: {
     fontWeight: '600',
     fontSize: 12,
     color: '#fff',
   },
   imgDevice:{
    width: 200, 
    marginLeft:90,
    height: 200 ,
    resizeMode:"stretch"
 },
 
   submitButton: {
    backgroundColor: '#657ec7',
    padding: 10,
    margin: 15,
    marginLeft:65,
    height: 60,
    width: 250,
    borderRadius:20
 },
 name:{
  color: '#000',
  marginLeft: 40,
  alignContent:"center",
  fontSize: 20,
  fontWeight: "bold"
},
head: { height: 40, backgroundColor: '#f1f8ff' },
text: { margin: 6 }
 })