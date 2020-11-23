import React from "react";
import {AsyncStorage, View, Text, TouchableOpacity,ScrollView , TextInput, StyleSheet ,Button,Image} from 'react-native'
import axios from "axios";
import { FlatGrid } from 'react-native-super-grid';
import { Actions } from 'react-native-router-flux';
import { Table, Row,TableWrapper,  Rows, Cell } from 'react-native-table-component';
 

export default class App extends React.Component {
    state = {
        deviceId: '1',
        userId:'1',
        device: [],
        shedule:[],
        tableHead: ['Id', 'Date',  'Status', 'Status'],
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
           .get("http://petfeeder.xyz:3000/device/"+this.state.deviceId)
           .then(data => this.setState({ device: data.data }))
           .catch(err => {
               console.log(err);
               return null;
           });
    };
    getShedule = () => {
      axios
          .get("http://petfeeder.xyz:3000/shedule/"+this.state.deviceId)
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
      _alertIndex=(id)=>{
       
        axios
          .delete("http://petfeeder.xyz:3000/shedule/"+this.state.shedule[id].id)
          .then(data => {console.log(data); alert("Deleted !");Actions.device();})
          .catch(err => {
              console.log(err);
              return null;
          });
      }
    render() {
     
      this.state.shedule.map((item, index) => (
        this.state.tableData.push([item.id, item.date, item.time, item.status])
     ))
     console.log(this.state.tableData);
     const element = (data, index) => (
       
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>X</Text>
        </View>
      </TouchableOpacity>
    );
       return (
           <View>
             <ScrollView>
               {this.state.device.length === 0 ? (
                  <Image source = {{uri:'https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'}}
                  style = {styles.img}
                  />
               ) : (
               
                <View style={{backgroundColor:'#4A546B', height:720}}>
                      <Image source = {{uri:'http://critssl.com/img/SeekPng.com_dog-paw-print-png_426445.png'}}style = {styles.imgDevice}/>

                       
                        <View style={{
                                paddingTop:10,
                                paddingBottom:100,
                                paddingLeft:70,
                                paddingRight:70
                                ,flex: 1, 
                                flexDirection: 'row',
                              
                                          }}>
                              <View 
                                          style={{ borderWidth:1,
                                            borderColor:'rgba(0,0,0,0.2)',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width:80,
                                            height:80,
                                            backgroundColor:'#f0cccc',
                                            borderRadius:100,
                                       
                                          }}
                                          >
                                          <Text style={{
                                         paddingTop:50,
                                         fontSize: 30,
                                         color: '#000',
                                         fontWeight: '600',
                                       
                                          }} >{this.state.device[0].slot1Status}</Text>
                                          <Text ></Text>
                                          <Text style={styles.slotName}>{this.state.device[0].slot1Name}      </Text>
                               </View>
                               
                               <View 
                                          style={{ borderWidth:1,
                                            borderColor:'rgba(0,0,0,0.2)',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width:80,
                                            height:80,
                                            backgroundColor:'#e0df9b',
                                            borderRadius:100,
                                       
                                          }}
                                          >
                                           <Text style={{
                                         paddingTop:50,
                                         fontSize: 30,
                                         color: '#000',
                                         fontWeight: '600',
                                       
                                          }} >{this.state.device[0].slot2Status}</Text>
                                          <Text ></Text>
                                          <Text style={styles.slotName}>{this.state.device[0].slot2Name}      </Text>
                               </View>
                               <View 
                                          style={{ borderWidth:1,
                                            borderColor:'rgba(0,0,0,0.2)',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width:80,
                                            height:80,
                                            backgroundColor:'#c5e3b3',
                                            borderRadius:100,
                                       
                                          }}
                                          >
                                          <Text style={{
                                        paddingTop:50,
                                        fontSize: 30,
                                        color: '#000',
                                        fontWeight: '600',
                                      
                                          }} >{this.state.device[0].slot3Status}</Text>
                                          <Text ></Text>
                                          <Text style={styles.slotName}>{this.state.device[0].slot3Name}      </Text>
                               </View>
                               </View>
                      <TouchableOpacity
                            onPress = {Actions.newShedule}
                            title = "New Device"
                            
                            style ={styles.submitButton}
                        >
                           <Text style={styles.name}>New Shedule</Text>
                          </TouchableOpacity>

                          {/* <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                                <Rows data={this.state.tableData} textStyle={styles.text}/>
                          </Table> */}
                       <View style={{height:1000}}>
                          <Table borderStyle={{borderColor: 'transparent'}} >   
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/> 
          <ScrollView style={styles.dataWrapper}>
            <View>
          {
          this.state.tableData.map((rowData, index) => (
           
              <TableWrapper key={index} style={styles.row}>
                 
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex ===2? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                } 
              </TableWrapper>
             
            ))
 
          }
          </View>
           </ScrollView>
        </Table>
       </View>
                    </View>

                    
                       
                      
               )}
</ScrollView>

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
  dataWrapper: { marginTop: -1 },
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

 dataViewer:{
  
  resizeMode:"stretch"
},
slotName: {
  fontSize: 20,
  color: '#E91E30',
  fontWeight: '600',
  paddingTop:15,
  paddingLeft:15
  

},
slotValue: {
  fontSize: 20,
  color: '#FFF',
  fontWeight: '600',
  paddingTop:15,
  paddingLeft:15
  

},
   submitButton: {
    backgroundColor: '#b895f0',
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
container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 100,width:20, marginRight:25 },
  btnText: { textAlign: 'center', color: '#fff' ,}
 })