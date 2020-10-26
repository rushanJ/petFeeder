import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Screens/Login.js'
import Register from './Screens/Register.js'
import Home from './Screens/Home.js'
import Device from './Screens/Device.js'
import NewDevice from './Screens/NewDevice.js'
import NewShedule from './Screens/NewShedule.js'
const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login}  initial = {true} />
         <Scene key = "register" component = {Register} title = "Register" />
         <Scene key = "home" component = {Home} title = "Home"  />
         <Scene key = "device" component = {Device} title = "Device" />
         <Scene key = "newDevice" component = {NewDevice} title = "NewDevice" />
         <Scene key = "newShedule" component = {NewShedule} title = "NewShedule" />
      </Scene>
   </Router>
)
export default Routes