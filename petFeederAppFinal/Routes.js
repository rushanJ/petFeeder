import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Screens/Login.js'
import Register from './Screens/Register.js'
import Home from './Screens/Home.js'
import Device from './Screens/Device.js'
import NewDevice from './Screens/NewDevice.js'
import NewShedule from './Screens/NewShedule.js'
import Splash from './Screens/Splash.js'
const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login}  initial = {true}    backButtonTextStyle = {{color:'#000000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000000' }}
                                                                                titleStyle = {{color : '#ffffff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#4A546B'}}
                                                                                backButtonTintColor = '#ffffff'/> 
         <Scene key = "register" component = {Register} title = "Register" backButtonTextStyle = {{color:'#000000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000000' }}
                                                                                titleStyle = {{color : '#ffffff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#4A546B'}}
                                                                                backButtonTintColor = '#ffffff'/> 
         <Scene key = "home" component = {Home}  title = "Home" backButtonTextStyle = {{color:'#000000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000000' }}
                                                                                titleStyle = {{color : '#ffffff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#4A546B'}}
                                                                                backButtonTintColor = '#ffffff'/> 
         <Scene key = "device" component = {Device}   title = "Device" backButtonTextStyle = {{color:'#000000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000000' }}
                                                                                titleStyle = {{color : '#ffffff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#4A546B'}}
                                                                                backButtonTintColor = '#ffffff'/> 
         <Scene key = "newDevice"  component = {NewDevice} title = "NewDevice" backButtonTextStyle = {{color:'#000000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000000' }}
                                                                                titleStyle = {{color : '#ffffff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#4A546B'}}
                                                                                backButtonTintColor = '#ffffff'/> 
         <Scene key = "newShedule" component = {NewShedule}  title = "NewShedule" backButtonTextStyle = {{color:'#000000'}}
                                                                                barButtonIconStyle={{ tintColor: '#000000' }}
                                                                                titleStyle = {{color : '#ffffff'}}
                                                                                navigationBarStyle = {{backgroundColor : '#4A546B'}}
                                                                                backButtonTintColor = '#ffffff'/> 
          <Scene key = "splash" component = {Splash} title = "" backButtonTextStyle = {{color:'#4A546B'}}
                                                                                barButtonIconStyle={{ tintColor: '#4A546B' }}
                                                                                titleStyle = {{color : '#4A546B'}}
                                                                                navigationBarStyle = {{backgroundColor : '#4A546B'}}
                                                                                backButtonTintColor = '#4A546B'/> 
      </Scene>
   </Router>
)
export default Routes