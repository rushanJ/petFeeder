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
           .get("http://192.168.8.101:3000/userDevice/"+this.state.userId)
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
           <View>
               {this.state.devices.length === 0 ? (
                  <Image source = {{uri:'https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'}}
                  style = {styles.img}
                  />
               ) : (
               
                        <View style = {styles.container}>
                           <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/61fPaBy%2BexL._AC_SL1500_.jpg'}}
                  style = {styles.img}
                  />
                            <Text style={styles.name}>Hello..{this.state.userName}</Text>
                            <FlatGrid
                            itemDimension={130}
                            data={this.state.devices}
                            style={styles.gridView}
                            // staticDimension={300}
                            // fixed
                            spacing={10}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={()=> this.selectDevice(item.device)}  style={[styles.itemContainer, { backgroundColor: '#67afd6' }]}>
                                 <Image source = {{uri:'https://images-na.ssl-images-amazon.com/images/I/61fPaBy%2BexL._AC_SL1500_.jpg'}}style = {styles.imgDevice}/>
                                <Text style={styles.itemName}>{item.device}</Text>
                                <Text style={styles.slotName}>{item.slot1Name}       {item.slot1Status}%</Text>
                                <Text style={styles.slotName}>{item.slot2Name}       {item.slot2Status}%</Text>
                                <Text style={styles.slotName}>{item.slot3Name}       {item.slot3Status}%</Text>
                                <Text style={styles.slotName}>{item.code}</Text>
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
     color: '#000',
     fontWeight: '600',
   },
   
   slotName: {
     fontSize: 16,
     color: '#753e3d',
     fontWeight: '600',
   },
   itemCode: {
     fontWeight: '600',
     fontSize: 12,
     color: '#fff',
   },
   
   img:{
      width: 150, 
      marginLeft:120,
      height: 150 ,
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
    backgroundColor: '#f542b3',
    padding: 10,
    margin: 15,
    marginLeft:75,
    height: 60,
    width: 250,
    borderRadius:20
 },
 })