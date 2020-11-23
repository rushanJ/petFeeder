import React from "react";
import {AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet , Button ,Image} from 'react-native'
import axios from "axios";
import { FlatGrid } from 'react-native-super-grid';
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
    state = {
        devices: []
    };
    componentDidMount() {
        AsyncStorage.getItem('userName').then((value) => this.setState({ 'userName': value }))
         AsyncStorage.getItem('userId').then((value) => this.setState({ 'userId': value }))
         AsyncStorage.getItem('userId').then((value) => this.getDevices())
         
         this.state.devices.push({ name: "data.id", code: '#fff' });
    //    this.getDevices();
    }
    getDevices = () => {
      var letters = '0123456789ABCDEF';
       axios
           .get("http://petfeeder.xyz:3000/userDevice/"+this.state.userId)
           .then(data => {
               this.setState({ devices: data.data })
               this.state.devices.push({ name: "data.id", code: letters[Math.floor(Math.random() * 16)] });
        })
           .catch(err => {
               console.log(err);
               return null;
           });

    };
    selectDevice=(id)=> {
         AsyncStorage.setItem('device',id.toString());
         //AsyncStorage.getItem('device').then((value) => alert(value));
        // alert('You tapped the button!'+id)
        Actions.device()
      }
    
       getRandomColor=()=> {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    render() {
       return (
           <View style={{backgroundColor:'#4A546B', height:720}}>
               {this.state.devices.length === 0 ? (
                  <View><Image source = {{uri:'https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'}}
                  style = {styles.img}
                  />
                  <TouchableOpacity
                            onPress = {Actions.newDevice}
                            title = "New Device"
                            
                            style ={styles.submitButton}
                        >
                           <Text style={styles.name}>Add New Device</Text>
                          </TouchableOpacity>
                  </View>
                  
               ) : (
               
                        <View style = {styles.container}>
                           <Image source = {{uri:'http://critssl.com/img1/image1.png'}}
                  style = {styles.img}
                  />
                            <Text style={styles.username}>Hello..{this.state.userName}</Text>
                            <FlatGrid
                            itemDimension={130}
                            data={this.state.devices}
                            style={styles.gridView}
                            // staticDimension={300}
                            // fixed
                            spacing={10}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={()=> this.selectDevice(item.device)}  style={[styles.itemContainer, { backgroundColor: '#696b8a',padding:0}]}>
                              <Text style={styles.itemName}>{item.device}</Text>
                              <View style={{
                                paddingTop:1
                                ,flex: 1, 
                                flexDirection: 'row'
                                          }}>
                              <View 
                                          style={{ borderWidth:1,
                                            borderColor:'rgba(0,0,0,0.2)',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width:60,
                                            height:60,
                                            backgroundColor:'#f0cccc',
                                            borderRadius:100,
                                       
                                          }}
                                          >
                                          <Text style={{
                                        paddingTop:50
                                       
                                          }} >{item.slot1Status}</Text>
                                          <Text ></Text>
                                          <Text style={styles.slotName}>{item.slot1Name}      </Text>
                               </View>
                               
                               <View 
                                          style={{ borderWidth:1,
                                            borderColor:'rgba(0,0,0,0.2)',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width:60,
                                            height:60,
                                            backgroundColor:'#e0df9b',
                                            borderRadius:100,
                                       
                                          }}
                                          >
                                           <Text style={{
                                        paddingTop:50
                                       
                                          }} >{item.slot2Status}</Text>
                                          <Text ></Text>
                                          <Text style={styles.slotName}>{item.slot2Name}      </Text>
                               </View>
                               <View 
                                          style={{ borderWidth:1,
                                            borderColor:'rgba(0,0,0,0.2)',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width:60,
                                            height:60,
                                            backgroundColor:'#c5e3b3',
                                            borderRadius:100,
                                       
                                          }}
                                          >
                                          <Text style={{
                                        paddingTop:50
                                       
                                          }} >{item.slot3Status}</Text>
                                          <Text ></Text>
                                          <Text style={styles.slotName}>{item.slot3Name}      </Text>
                               </View>
                               </View>
                             
                                </TouchableOpacity>
                            )}
                            
                        />
                        <TouchableOpacity
                            onPress = {Actions.newDevice}
                            title = "New Device"
                            
                            style ={styles.submitButton}
                        >
                           <Text style={styles.name}>Add New Device</Text>
                          </TouchableOpacity>
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
   itemName: {
     fontSize: 20,
     marginLeft:60,
     color: '#58cf21',
     fontWeight: '600',
     padding:20,
     paddingBottom:5
   },
   username: {
    fontSize: 20,
     color: '#9de0d9',
     fontWeight: '600',
     padding:20,
     paddingBottom:5
   },
   slotName: {
     fontSize: 16,
     color: '#22ebf2',
     fontWeight: '600',
     padding:2,
     
 
   },
   itemCode: {
     fontWeight: '600',
     fontSize: 12,
     color: '#fff',
   },
   
   img:{
      width: 100, 
      marginLeft:150,
      height: 100 ,
      resizeMode:"stretch"
   },
   imgDevice:{
    width: 30, 
    marginLeft:60,
    height: 30 ,
    resizeMode:"stretch"
 },
   name:{
      color: '#000',
      marginLeft: 30,
      alignContent:"center",
      fontSize: 20,
      fontWeight: "bold"
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
 })